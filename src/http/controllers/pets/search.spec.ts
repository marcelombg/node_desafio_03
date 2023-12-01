import request from 'supertest'
import { app } from '@/app'
import { describe, it, afterAll, beforeAll, expect } from 'vitest'
// import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Search Pets (e2e)', () => {

    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to search available pets by city', async () => {
        // const { token } = await createAndAuthenticateUser(app, true)

        await request(app.server)
        .post('/pets/register')
        // .set('Authorization', `Bearer ${token}`)
        .send({
            name: 'Aslan',
            characteristics: 'Grande porte',
            details: 'Peludo',
            city: 'São Paulo',
            adopted: false
        })

        await request(app.server)
        .post('/pets/register')
        // .set('Authorization', `Bearer ${token}`)
        .send({
            name: 'Nala',
            characteristics: 'Médio porte',
            details: 'Carinhosa',
            city: 'São Bernardo do Campo',
            adopted: true
        })

        const response = await request(app.server)
        .get('/pets/search')
        .query({
            query: 'São Paulo'
        })
        // .set('Authorization', `Bearer ${token}`)
        .send()

        expect(response.statusCode).toEqual(200)
        expect(response.body.pets).toHaveLength(1)
        expect(response.body.pets).toEqual([
            expect.objectContaining({
                city: 'São Paulo'
            })
        ])
    })
})