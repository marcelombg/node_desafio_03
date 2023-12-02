import { expect, describe, it, beforeEach } from 'vitest'
import { CreateOngUseCase } from './create-ong'
import { InMemoryOngsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let ongsRepository: InMemoryOngsRepository
let sut: CreateOngUseCase

describe('Create Use Case', () => {

    beforeEach(() => {
        ongsRepository = new InMemoryOngsRepository()
        sut = new CreateOngUseCase(ongsRepository)
    })

    it('should be able to create ong', async () => {

        const { ong } =  await sut.execute({
            title: 'ONG test',
            description: "description test",
            phone: "9999999999",
            whatsapp_number: "9999999999",
            address: "address test"
        })

        expect(ong.id).toEqual(expect.any(String))
    })
})