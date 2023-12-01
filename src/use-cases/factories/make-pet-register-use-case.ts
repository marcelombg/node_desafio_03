import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository"
import { PetRegisterUseCase } from "../pet-register"

export function makePetRegisterUserCase() {
    const petsRepository = new PrismaPetsRepository()
    const petRegisterUseCase = new PetRegisterUseCase(petsRepository)

    return petRegisterUseCase
}