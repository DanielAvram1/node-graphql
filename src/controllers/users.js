const db = require('../../models')
module.exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll()
        res.send(allUsers)
    } catch(error) {
        console.error('Something went wrong on getAllUsers')
        res.send({
            error: "Something went wrong"
        })
    }
    
}

module.exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params
        const user = await db.User.findOne({
            where: {id: id},
        })

        if (user) {
            res.status(200).json({user})
        }
        return res.status(404).send('User not found.')

    } catch(error) {
        res.status(500).send(error.message)
    }
}
module.exports.createUser = async (req, res) => {
    const {
        email,
        firstName,
        lastName,
    } = req.body

    try {
        const newUser = await db.User.create({
            email,
            firstName,
            lastName
        })

        res.status(201).send(newUser)
    } catch(error) {
        console.error(error)
        res.status(400).send({
            error: error
        })
    }
}
module.exports.uptadeUser = async (req, res) => {
    try {
        const { id } = req.params
        const [updated] = await User.update(req.body, {
            where: {id: id}
        })
        if (updated) {
            const user = await db.User.findOne({
                where: {id: id}
            })
            res.status(200).send(user)
        }
        throw new Error('User not found')
    } catch (error) {
        res.status(500).send(error.message)
    }
}
module.exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await db.User.destroy({
            where: { id: id }
        })
        if (deleted) {
            res.status(204).send('User deleted')
        }
        throw new Error('User not found')
    } catch (error) {
        res.status(500).send(error.message)
    }
}