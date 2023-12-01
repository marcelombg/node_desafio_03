import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { SearchPetsUseCase } from './search-pets'

let petsRepository: InMemoryPetsRepository
let sut: SearchPetsUseCase

describe('Fetch User Check-In History Use Case', () => {

    beforeEach(async () => {
        petsRepository = new InMemoryPetsRepository()
        sut = new SearchPetsUseCase(petsRepository)

    })

    it('should be able to search pets', async () => {

        await petsRepository.create({
            name: 'Aslan',
            characteristics: 'Grande porte',
            details: 'Peludo',
            city: 'São Paulo',
            adopted: false
        })

        await petsRepository.create({
            name: 'Nala',
            characteristics: 'Médio porte',
            details: 'Carinhosa',
            city: 'São Bernardo do Campo',
            adopted: true
        })

        const { pets } = await sut.execute({
            query: 'São Paulo',
            adopted: false
        })

        expect(pets).toHaveLength(1)
        expect(pets).toEqual([
            expect.objectContaining({city: 'São Paulo'})
        ])
    })
})