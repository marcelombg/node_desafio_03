import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makePetRegisterUserCase } from '@/use-cases/factories/make-pet-register-use-case'


export async function register(request: FastifyRequest, reply: FastifyReply) {

    const registerBodySchema = z.object({
        name: z.string(),
        characteristics: z.string(),
        details: z.string(),
        city: z.string()
    })

    const { name, characteristics, details, city } = registerBodySchema.parse(request.body)

    try {
        const petRegisterUseCase = makePetRegisterUserCase()

        await petRegisterUseCase.execute({ name, characteristics, details, city })
    } catch (err) {
        throw err
    }

    return reply.status(200).send({ message: 'PET cadastrado com sucesso!' })

}