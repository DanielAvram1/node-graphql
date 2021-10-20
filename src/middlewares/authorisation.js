import jwt from 'jsonwebtoken'

const authorisationMiddleware = async (req, res, next) => {
    const authorisation = req.headers.authorization
    console.log(authorisation)
    if(authorisation) {
        try {
            const isValid = jwt.verify(authorisation.replace('Bearer ', ''), MY_SECRET_KEY)
            next()
        }
        catch(e) {
            res.send({
                error: 'invalid token'
            })
        }
    }
}

export default authorisationMiddleware