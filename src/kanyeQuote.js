import fetch from 'node-fetch'

const kanyeQuote = async (req, res) => {
    const response = await fetch('https://api.kanye.rest/')
    const inJson = await response.json()
    res.send(inJson['quote'])
}

export default kanyeQuote