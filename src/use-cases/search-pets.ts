import { Pet } from '@prisma/client'
import { PetsRepository } from '@/repositories/pets-repository'

interface SearchPetsUseCaseRequest {
    query: string,
    adopted: boolean
}

interface SearchPetsUseCaseResponse {
    pets: Pet[]
}

export class SearchPetsUseCase {
    constructor(private petsRepository: PetsRepository) { }

    async execute({
        query, adopted
    }: SearchPetsUseCaseRequest): Promise<SearchPetsUseCaseResponse> {

        const pets = await this.petsRepository.searchMany(query, adopted)

        return {
            pets
        }
    }
}