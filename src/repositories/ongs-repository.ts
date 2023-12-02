import { Prisma, ONG } from "@prisma/client";

export interface OngsRepository {
    create(data: Prisma.ONGCreateInput) : Promise<ONG>
}