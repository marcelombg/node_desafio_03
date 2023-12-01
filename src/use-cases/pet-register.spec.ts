import { InMemoryPetsRepository } from '@/repositories/in-memory/in-memory-pets-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { PetRegisterUseCase } from './pet-register'
// import { compare } from 'bcryptjs'
// import { UserAlreadyExistsError } from './errors/user-already-exists-error'

let petsRepository: InMemoryPetsRepository
let sut: PetRegisterUseCase

describe('Pet Register Use Case', () => {

    beforeEach(() => {
        petsRepository = new InMemoryPetsRepository()
        sut = new PetRegisterUseCase(petsRepository)
    })

    it('should be able to register a pet', async () => {

        const { pet } =  await sut.execute({
            name: 'Aslan',
            characteristics: 'Grande porte',
            details: 'peludo',
            city: 'São Bernardo do Campo'
        })

        expect(pet.id).toEqual(expect.any(String))
    })
})