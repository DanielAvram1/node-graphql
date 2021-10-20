import express, { response } from 'express'
import kanyeQuote from './kanyeQuote.js'
import handleGreeting from './controllers/greeting.js'

import bodyParser from 'body-parser'
import authorisationMiddleware from './middlewares/authorisation.js'
import handleLogin from './controllers/login.js'
import { PORT } from './config/express.js'
import { MY_SECRET_KEY} from './config/jwt.js'

const app = express();

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('get out of my swamp.')
})

app.post('/login', handleLogin)

app.get('/hello/:name?', authorisationMiddleware, handleGreeting)

app.get('/kanyeQuote', authorisationMiddleware, kanyeQuote)

app.listen(PORT, () => {
    console.log('server started on ', PORT)
})