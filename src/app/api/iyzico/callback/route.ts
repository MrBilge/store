import { NextRequest, NextResponse } from "next/server";
import { getIyzicoClient, iyzicoRequest, Iyzipay } from "@/lib/iyzico";

type CheckoutResult = {
  status: string;
  paymentStatus?: string;
  errorMessage?: string;
};

const callbackPage = (success: boolean, message: string) => {
  const safeMessage = JSON.stringify(message).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="tr">
  <head><meta charset="utf-8"><title>Ödeme Sonucu</title></head>
  <body style="font-family:Arial,sans-serif;text-align:center;padding:48px">
    <h2>${success ? "Ödeme başarılı" : "Ödeme başarısız"}</h2>
    <p>${success ? "Siparişiniz alındı." : "Ödeme işlemi tamamlanamadı."}</p>
    <script>
      window.parent.postMessage(
        { type: "iyzico-payment-result", success: ${success}, message: ${safeMessage} },
        window.location.origin
      );
    </script>
  </body>
</html>`;
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const token = formData.get("token");

    if (typeof token !== "string" || !token) {
      return new NextResponse(callbackPage(false, "Ödeme tokenı bulunamadı."), {
        status: 400,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    const iyzico = getIyzicoClient();
    const result = await iyzicoRequest<CheckoutResult>(
      iyzico.checkoutForm.retrieve.bind(iyzico.checkoutForm),
      { locale: Iyzipay.LOCALE.TR, token },
    );
    const success =
      result.status === "success" && result.paymentStatus === "SUCCESS";
    const message = success
      ? "Sandbox ödemesi başarıyla tamamlandı."
      : result.errorMessage || "Ödeme iyzico tarafından onaylanmadı.";

    return new NextResponse(callbackPage(success, message), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Ödeme doğrulanamadı.";
    return new NextResponse(callbackPage(false, message), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }
}
