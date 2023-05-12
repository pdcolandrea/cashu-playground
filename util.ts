import QRCode from "qrcode";

const BASE_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=";
export const showInvoiceQR = (pr: string) =>
  console.warn(`QRCODE: ${BASE_URL}${pr}`);
