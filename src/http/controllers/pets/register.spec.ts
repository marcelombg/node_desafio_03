import request from 'supertest'
import { app } from '@/app'
import { describe, it, afterAll, beforeAll, expect } from 'vitest'

describe('Pet Register (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register a pet', async () => {
        const response = await request(app.server)
        .post('/pets/register')
        .send({
            name: 'Aslan',
            characteristics: 'Grande porte',
            details: 'peludo',
            city: 'São Bernardo do Campo'
        })

        expect(response.statusCode).toEqual(200)
    })
})