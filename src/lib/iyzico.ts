import Iyzipay from "iyzipay";

export function getIyzicoClient() {
  const apiKey = process.env.IYZIPAY_API_KEY;
  const secretKey = process.env.IYZIPAY_SECRET_KEY;

  if (!apiKey || !secretKey) {
    throw new Error(
      "IYZIPAY_API_KEY ve IYZIPAY_SECRET_KEY ortam değişkenleri eksik.",
    );
  }

  return new Iyzipay({
    apiKey,
    secretKey,
    uri: "https://sandbox-api.iyzipay.com",
  });
}

export function iyzicoRequest<T>(
  operation: (
    request: Record<string, unknown>,
    callback: (error: Error | null, result: Record<string, unknown>) => void,
  ) => void,
  request: Record<string, unknown>,
) {
  return new Promise<T>((resolve, reject) => {
    operation(request, (error, result) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(result as T);
    });
  });
}

export { Iyzipay };
