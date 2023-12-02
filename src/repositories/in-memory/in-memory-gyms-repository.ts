import { ONG, Prisma } from "@prisma/client";
import { randomUUID } from "crypto";
import { OngsRepository } from "../ongs-repository";

export class InMemoryOngsRepository implements OngsRepository {
    
    public items: ONG[] = []


    async create(data: Prisma.ONGCreateInput) {
        const ong = {
            id: data.id ?? randomUUID(),
            title: data.title,
            description: data.description ?? null,
            phone: data.phone ?? null,
            whatsapp_number: data.whatsapp_number,
            address: data.address
        }

        this.items.push(ong)

        return ong
    }
}