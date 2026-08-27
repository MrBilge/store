import { NextRequest, NextResponse } from "next/server";
import { products } from "@/data/products";
import { getIyzicoClient, iyzicoRequest, Iyzipay } from "@/lib/iyzico";

type InitializeBody = {
  person?: {
    fullName?: string;
    email?: string;
    phone?: string;
    identityNumber?: string;
  };
  address?: {
    city?: string;
    district?: string;
    postalCode?: string;
    address?: string;
  };
  basket?: Array<{ id?: number; quantity?: number }>;
};

type InitializeResult = {
  status: string;
  paymentPageUrl?: string;
  errorMessage?: string;
};

const priceString = (price: number) => price.toFixed(2);

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as InitializeBody;
    const { person, address, basket } = body;

    if (!person || !address || !basket?.length) {
      return NextResponse.json(
        { error: "Kişi, adres veya sepet bilgileri eksik." },
        { status: 400 },
      );
    }

    const fullName = person.fullName?.trim() || "";
    const nameParts = fullName.split(/\s+/);
    const surname = nameParts.length > 1 ? nameParts.pop() || "" : "-";
    const name = nameParts.join(" ") || fullName;
    const phoneDigits = (person.phone || "").replace(/\D/g, "");

    if (
      !name ||
      !person.email ||
      !/^\d{11}$/.test(person.identityNumber || "") ||
      !/^\d{10,11}$/.test(phoneDigits) ||
      !address.city ||
      !address.district ||
      !address.postalCode ||
      !address.address
    ) {
      return NextResponse.json(
        { error: "Ödeme için gerekli bilgiler geçersiz." },
        { status: 400 },
      );
    }

    const basketItems = basket.map((basketItem) => {
      const product = products.find((item) => item.id === basketItem.id);
      const quantity = Number(basketItem.quantity);

      if (!product || !Number.isInteger(quantity) || quantity < 1) {
        throw new Error("Sepette geçersiz bir ürün bulunuyor.");
      }

      return {
        id: String(product.id),
        name: product.name,
        category1: product.category,
        category2: product.subCategory,
        itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
        price: priceString(product.price * quantity),
      };
    });
    const totalPrice = basketItems.reduce(
      (total, item) => total + Number(item.price),
      0,
    );
    const basketId = crypto.randomUUID();
    const conversationId = crypto.randomUUID();
    const callbackUrl = `${request.nextUrl.origin}/api/iyzico/callback`;
    const registrationAddress = `${address.address}, ${address.district}/${address.city}`;
    const forwardedIp = request.headers.get("x-forwarded-for")?.split(",")[0];
    const iyzico = getIyzicoClient();

    const result = await iyzicoRequest<InitializeResult>(
      iyzico.checkoutFormInitialize.create.bind(iyzico.checkoutFormInitialize),
      {
        locale: Iyzipay.LOCALE.TR,
        conversationId,
        price: priceString(totalPrice),
        paidPrice: priceString(totalPrice),
        currency: Iyzipay.CURRENCY.TRY,
        basketId,
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        callbackUrl,
        enabledInstallments: [1, 2, 3, 6, 9],
        buyer: {
          id: `BY-${conversationId}`,
          name,
          surname,
          gsmNumber: phoneDigits.startsWith("0")
            ? `+9${phoneDigits}`
            : `+90${phoneDigits}`,
          email: person.email,
          identityNumber: person.identityNumber,
          registrationAddress,
          ip: forwardedIp || "127.0.0.1",
          city: address.city,
          country: "Turkey",
          zipCode: address.postalCode,
        },
        shippingAddress: {
          contactName: fullName,
          city: address.city,
          country: "Turkey",
          address: registrationAddress,
          zipCode: address.postalCode,
        },
        billingAddress: {
          contactName: fullName,
          city: address.city,
          country: "Turkey",
          address: registrationAddress,
          zipCode: address.postalCode,
        },
        basketItems,
      },
    );

    if (result.status !== "success" || !result.paymentPageUrl) {
      return NextResponse.json(
        { error: result.errorMessage || "iyzico ödeme oturumu oluşturulamadı." },
        { status: 502 },
      );
    }

    return NextResponse.json({ paymentPageUrl: result.paymentPageUrl });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Ödeme başlatılamadı." },
      { status: 500 },
    );
  }
}
