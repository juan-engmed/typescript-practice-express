interface ImailTo{
    name: string;
    email: string;
}

interface IMailMessage{
    subject: string;
    body: string;
    attachmen?: Array<string>
    //ou string[]
}

interface IMessageDTO{
    to: ImailTo;
    message: IMailMessage;
}

interface IEmailService{
    sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
    sendMail({to, message}: IMessageDTO){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }

}

export default EmailService