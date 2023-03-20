import * as emailjs from '@emailjs/browser';

export const sendContactInfo = async (e: EmailToSend): Promise<boolean> => {
    try {
        const payload = {
            name: e.name,
            email: e.email,
            message: e.message,
        }
       const res = await emailjs.send('service_15vecpd', 'template_zly3s62', payload, 'user_VOT8V9hDdOcctPxQMy0pJ');
       return res.status === 200
    } catch (error) {
        return false;
    }
}

export interface EmailToSend {
    name: string,
    email: string,
    message: string,
}