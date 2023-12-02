import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repository'

interface filterPetsByCharacteristicsUseCaseRequest {
    query: string
}

interface filterPetsByCharacteristicsUseCaseResponse {
    pets: Pet[]
}

export class FilterPetsByCharacteristicsUseCase {
    constructor(private petsRepository: PetsRepository) { }

    async execute({
        query
    }: filterPetsByCharacteristicsUseCaseRequest): Promise<filterPetsByCharacteristicsUseCaseResponse> {

        const pets = await this.petsRepository.filterByCharacteristics(query)
        
        return {
            pets
        }
    }
}