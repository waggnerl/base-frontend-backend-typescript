import { Request,Response } from "express"
import EmailService from "../services/EmailService"

const users = [
    {
        name: 'Diego',email: 'wagnermflira@gmail.com'
    },
    {
        name: 'Pedro',email: 'pedro@gmail.com'
    },
    {
        name: 'Alberto',email: 'alberto@gmail.com'
    }
]

export default {
    async index(req: Request,res:Response){
        return res.json(users)
    },
    async create(req: Request,res:Response){
        const emailService = new EmailService();     
        emailService.sendMail({to:{name: 'wagner', email:'wagner@gmail.com'},message:{content: 'assuntos pessoais', subject: 'financeiro'}})   
        return res.send()
    }
}