import { z } from 'zod'
import { FastifyRequest, FastifyReply } from 'fastify'
import { makeFilterPetsByCharacteristicsUseCase } from '@/use-cases/factories/make-filter-pets-by-characteristics'
import { parse } from 'node:path'


export async function filter(request: FastifyRequest, reply: FastifyReply) {

    const filterPetsQuerySchema = z.object({
        query: z.string()
    })

    const { query } = filterPetsQuerySchema.parse(request.query)

    const filterPetsByCharacteristicsUseCase = makeFilterPetsByCharacteristicsUseCase()

    const { pets } = await filterPetsByCharacteristicsUseCase.execute({
        query: query
    })

    if (pets.length === 0) {
        return reply.status(404).send({
            message: `Nenhum PET localizado com a característica ${query}.`
        })
    }

    return reply.status(200).send({
        pets
    })
}