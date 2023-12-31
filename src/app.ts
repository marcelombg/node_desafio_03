import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'
import { ZodError } from 'zod'
import { env } from './env'
import fastifyJwt from '@fastify/jwt'
import { petsRoutes } from './http/controllers/pets/routes'
import { ongsRoutes } from './http/controllers/ongs/routes'
import { usersRoutes } from './http/controllers/users/routes'

export const app = fastify()

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName: 'refreshToken',
        signed: false
    },
    sign: {
        expiresIn: '10m'
    }
})

app.register(fastifyCookie)
app.register(petsRoutes)
app.register(ongsRoutes)
app.register(usersRoutes)

app.setErrorHandler((error, _request, reply) => {
    if (error instanceof ZodError) {
        return reply
            .status(400)
            .send({ message: 'Validation error.', issues: error.format() })
    }

    if (env.NODE_ENV != 'production') {
        console.error(error)
    } else {
        // TODO: Here we should log to an external toll like DataDog/NewRelic/Sentry
    }

    return reply
        .status(500)
        .send({ message: 'Internal server error.' })
}) 