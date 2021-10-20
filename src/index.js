import express from 'express'
import kanyeQuote from './kanyeQuote.js'
import handleGreeting from './greeting.js'

const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.send('get out of my swamp.')
})

app.get('/hello/:name?', handleGreeting)

app.get('/kanyeQuote', kanyeQuote)

app.listen(port, () => {
    console.log('server started on ', port)
})