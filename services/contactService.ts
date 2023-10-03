import * as emailjs from "@emailjs/browser";

export const sendContactInfo = async (e: EmailToSend): Promise<boolean> => {
  try {
    const serviceID: string = process.env.CONTACT_SERVICE_ID;
    const templateID: string = process.env.CONTACT_TEMPLATE_ID;
    const publicKey: string = process.env.CONTACT_PUBLIC_KEY;
    const payload: Record<string, string> = {
      name: e.name,
      email: e.email,
      message: e.message,
    };

    const res = await emailjs.send(serviceID, templateID, payload, publicKey);
    return res.status === 200;
  } catch (error) {
    return false;
  }
};

export interface EmailToSend {
  name: string;
  email: string;
  message: string;
}
