import { Prisma, Ong } from "@prisma/client";

export interface OngsRepository {
    create(data: Prisma.OngCreateInput) : Promise<Ong>
}