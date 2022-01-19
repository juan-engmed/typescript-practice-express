import {Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Juan', email: 'juan@gmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            { name: 'Juan', email: 'juan@gmail.com'},
            {subject: 'Bem Vindo ao Sistema', body: "Seja bem vindo!"}
        );

        return res.send('Ae');
    }
};