import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeOngRegisterUserCase } from '@/use-cases/factories/make-ong-register-use-case copy'


export async function register(request: FastifyRequest, reply: FastifyReply) {

    const registerBodySchema = z.object({
        title: z.string(),
        description: z.string(),
        phone: z.string(),
        whatsapp_number: z.string(),
        address: z.string()
    })

    const { title, description, phone, whatsapp_number, address } = registerBodySchema.parse(request.body)

    try {
        const ongRegisterUseCase = makeOngRegisterUserCase()

        await ongRegisterUseCase.execute({ title, description, phone, whatsapp_number, address })
    } catch (err) {
        throw err
    }

    return reply.status(200).send({ message: 'ONG cadastrada com sucesso!' })

}