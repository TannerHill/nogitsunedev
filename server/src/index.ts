import { useContainer, useExpressServer } from 'routing-controllers';
import 'reflect-metadata';
import Container from 'typedi';
import express, { static as static_, type NextFunction, type Request, type Response } from 'express';
import path from 'path';
import { Mailer } from './lib/mailer';
import { ContactController } from './controllers/contactController';

const initialize = async () => {
    const { SMTP_PORT, SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SMTP_RECIPIENT, SMTP_MAIL_SENDER } = process.env;

    useContainer(Container);

    Container.set(Mailer, new Mailer(
        SMTP_HOST!,
        SMTP_PORT!,
        SMTP_USER!,
        SMTP_PASSWORD!,
        SMTP_MAIL_SENDER!,
        SMTP_RECIPIENT!
    ));

    const expressServer = express();

    expressServer.use(static_(path.resolve(__dirname, '..', 'public')));

    const app = useExpressServer(expressServer, {
        controllers: [
            ContactController
        ]
    });

    expressServer.use((req: Request, res: Response, next: NextFunction) => {
        if (req.path.startsWith('/api')) {
            return next();
        }

        if (path.basename(req.path).includes('.')) {
            return next();
        }

        return res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
    });

    const port = process.env.PORT || 8080;

    app.listen(port);
}

initialize();