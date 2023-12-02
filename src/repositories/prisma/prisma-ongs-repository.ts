import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { OngsRepository } from "../ongs-repository";

export class PrismaOngsRepository implements OngsRepository {
    
    async create(data: Prisma.ONGCreateInput){
        const ong = await prisma.oNG.create({
            data
        })

        return ong
    }
}