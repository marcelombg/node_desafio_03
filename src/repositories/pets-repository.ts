import { Prisma, Pet } from "@prisma/client";

export interface PetsRepository {
    findById(petId: string) : Promise<Pet | null>
    searchMany(query: string) : Promise<Pet[]>
    create(data: Prisma.PetCreateInput) : Promise<Pet>
}