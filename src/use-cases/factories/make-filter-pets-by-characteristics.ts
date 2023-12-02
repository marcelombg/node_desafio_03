import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { FilterPetsByCharacteristicsUseCase } from "../filter-pets-by-characteristics"

export function makeFilterPetsByCharacteristicsUseCase() {
    const petsRepository = new PrismaPetsRepository()
    const useCase = new FilterPetsByCharacteristicsUseCase(petsRepository)

    return useCase
}