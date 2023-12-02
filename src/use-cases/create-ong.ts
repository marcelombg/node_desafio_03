import { OngsRepository } from "@/repositories/ongs-repository"
import { ONG } from "@prisma/client"

interface CreateOngUseCaseRequest {
    title: string,
    description?: string | null,
    phone?: string | null,
    whatsapp_number: string,
    address: string
}

interface CreateOngUseCaseResponse {
    ong: ONG
}

export class CreateOngUseCase {
    constructor(private ongsRepository: OngsRepository) { }

    async execute({
        title,
        description,
        phone,
        whatsapp_number,
        address
    }: CreateOngUseCaseRequest): Promise<CreateOngUseCaseResponse> {

        const ong = await this.ongsRepository.create({
            title,
            description,
            phone,
            whatsapp_number,
            address
        })

        return {
            ong
        }
    }
}