import { expect, describe, it, beforeEach } from 'vitest'
import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { FilterPetsByCharacteristicsUseCase } from './filter-pets-by-characteristics'

let petsRepository: InMemoryPetsRepository
let sut: FilterPetsByCharacteristicsUseCase

describe('Filter Pets By Characteristics Use Case', () => {

    beforeEach(async () => {
        petsRepository = new InMemoryPetsRepository()
        sut = new FilterPetsByCharacteristicsUseCase(petsRepository)

    })

    it('should be able to filter pets by characteristics', async () => {

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
            adopted: false
        })

        const { pets } = await sut.execute({
            query: 'Grande porte'
        })

        expect(pets).toHaveLength(1)
        expect(pets).toEqual(expect.arrayContaining([
            expect.objectContaining({ characteristics: 'Grande porte' })
        ]))
    })
})