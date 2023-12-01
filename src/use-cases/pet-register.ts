import { PetsRepository } from '@/repositories/pets-repository'
import { Pet } from '@prisma/client'

interface PetRegisterUseCaseRequest {
    name: string,
    characteristics: string,
    details: string,
    city: string
}

interface PetRegisterUseCaseResponse {
    pet: Pet
}

export class PetRegisterUseCase {
    constructor(private petsRepository: PetsRepository) { }

    async execute({
        name,
        characteristics,
        details,
        city
    }: PetRegisterUseCaseRequest): Promise<PetRegisterUseCaseResponse> {

        // const password_hash = await hash(password, 6)

        // const userWithSameEmail = await this.usersRepository.findByEmail(email)

        // if (userWithSameEmail) {
        //     throw new UserAlreadyExistsError()
        // }

        const pet = await this.petsRepository.create({
            name,
            characteristics,
            details,
            city
        })

        return {
            pet
        }
    }
}