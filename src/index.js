const express = require('express')
const handleGreeting = require( './controllers/greeting.js')

const bodyParser = require( 'body-parser')
const authorisationMiddleware = require( './middlewares/authorisation.js')
const handleLogin = require( './controllers/login.js')
const { PORT } = require( './config/express.js')
const { MY_SECRET_KEY} = require( './config/jwt.js')
const { getAllUsers, getUserById, uptadeUser, deleteUser, createUser } = require('./controllers/users.js')

const app = express();

app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.send('get out of my swamp.')
})

app.post('/login', handleLogin)

app.get('/hello/:name?', authorisationMiddleware, handleGreeting)

app.get("/users", getAllUsers)

app.get("/users/:id", getUserById)

app.post("/users", createUser)

app.put("users/:id", uptadeUser)

app.delete("users/:id", deleteUser)

app.listen(PORT, () => {
    console.log('server started on ', PORT)
})