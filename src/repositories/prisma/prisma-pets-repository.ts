import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { PetsRepository } from "../pets-repository";

export class PrismaPetsRepository implements PetsRepository {
        async findById(id: string){
        const pet = await prisma.pet.findUnique({
            where: {
                id
            }
        })

        return pet
    }

    async searchMany(query: string){
        const pets = await prisma.pet.findMany({
            where: {
                city: {
                    contains: query
                }
            }
        })

        return pets
    }

    async filterByCharacteristics(query: string) {
        const pets = await prisma.pet.findMany({
            where: {
                characteristics: {
                    contains: query
                }
            }
        })

        return pets
    }

    async create(data: Prisma.PetCreateInput){
        const pet = await prisma.pet.create({
            data
        })

        return pet
    }
}