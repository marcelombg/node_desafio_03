import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeSearchPetsUseCase } from '@/use-cases/factories/make-search-pets-use-case'

export async function search(request: FastifyRequest, reply: FastifyReply) {

    const searchPetsQuerySchema = z.object({
        query: z.string(),
        adopted: z.boolean().default(false)
    })

    const { query, adopted } = searchPetsQuerySchema.parse(request.query)

    const searchPetsUseCase = makeSearchPetsUseCase()

    const { pets } = await searchPetsUseCase.execute({
        query: query,
        adopted
    })

    if (pets.length === 0) {
        return reply.status(404).send({
            message: 'Nenhum PET disponível nesta cidade.'
        })
    }

    return reply.status(200).send({
        pets
    })
}