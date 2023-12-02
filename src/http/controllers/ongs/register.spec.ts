import request from 'supertest'
import { app } from '@/app'
import { describe, it, afterAll, beforeAll, expect } from 'vitest'

describe('ONG Register (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to register a ONG', async () => {
        const response = await request(app.server)
        .post('/ongs/register')
        .send({
            title: "ONG test",
            description: "description test",
            phone: "9999999999",
            whatsapp_number: "9999999999",
            address: "address test"
        })

        expect(response.statusCode).toEqual(200)
    })
})