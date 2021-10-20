
const handleGreeting = (request, response) =>{
    
    if(!request.params.name){
        response.send('hello noone')
    }
    const message = `hello, ${request.params.name}`
    response.send(message)
    
}

export default handleGreeting