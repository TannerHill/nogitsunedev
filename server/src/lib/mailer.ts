import { Service } from "typedi";
import { createTransport, Transporter } from 'nodemailer';
import { inspect } from 'util';

export class Mailer {
    private readonly transport: Transporter;

    constructor(host: string, port: string, smtpUser: string, smtpPass: string, private readonly sender: string, private readonly recipient: string) {
        this.transport = createTransport({
            host,
            port: Number(port),
            secure: true,
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        });
    }

    async sendEmail(message: string, replyTo: string) {
        try {
            await this.transport.sendMail({
                from: this.sender,
                to: this.recipient,
                subject: 'Contact for NogitsuneDev',
                text: message,
                replyTo
            });

            return true;
        }
        catch(e) {
            console.log(inspect(e));
            return false;
        }
    }
}