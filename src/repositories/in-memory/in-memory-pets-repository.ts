import { Prisma, Pet } from "@prisma/client";
import { randomUUID } from "crypto";
import { PetsRepository } from "../pets-repository";

export class InMemoryPetsRepository implements PetsRepository {
       
    public items: Pet[] = []

    async findById(id: string) {

        const pet = this.items.find(item => item.id === id)

        if (!pet) {
            return null
        }

        return pet
    }

    async searchMany(query: string) {
        return this.items.filter((item) => item.city.includes(query))
    }

    async filterByCharacteristics(query: string) {
        return this.items.filter((item) => item.characteristics.includes(query))
    }

    async create(data: Prisma.PetCreateInput) {
        const pet = {
            id: data.id ?? randomUUID(),
            name: data.name,
            characteristics: data.characteristics,
            details: data.details,
            city: data.city,
            adopted: false,
            created_at: new Date()
        }

        this.items.push(pet)

        return pet
    }
}