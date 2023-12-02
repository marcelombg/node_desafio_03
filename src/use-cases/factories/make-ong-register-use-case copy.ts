import { PrismaOngsRepository } from "@/repositories/prisma/prisma-ongs-repository"
import { CreateOngUseCase } from "../create-ong"

export function makeOngRegisterUserCase() {
    const ongsRepository = new PrismaOngsRepository()
    const ongRegisterUseCase = new CreateOngUseCase(ongsRepository)

    return ongRegisterUseCase
}