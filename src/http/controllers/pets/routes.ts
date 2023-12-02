import { FastifyInstance } from "fastify";
import { register } from "./register";
import { search } from "./search";
import { filter } from "./filter";

export async function petsRoutes(app: FastifyInstance) {
    app.post('/pets/register', register)
    app.get('/pets/search', search)
    app.get('/pets/filter', filter)
}