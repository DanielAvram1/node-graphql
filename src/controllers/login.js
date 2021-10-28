
const findUser = (username, password) => {
    if(username === 'admin' && password === '123456789') {
        return {username}
    }
    else {
        return null
    }
}

const handleLogin = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    if(findUser(username, password)) {
        const token = jwt.sign({}, MY_SECRET_KEY)
        res.send({
            token,
        })
    }
    else {
        res.status(401).send({'jwt': null})
    }
}

module.exports = handleLogin