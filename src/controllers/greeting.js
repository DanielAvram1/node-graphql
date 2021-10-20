
const handleGreeting = ({params, country}, response) =>{
    
    if(!params.name){
        response.send('hello noone')
    }
    const message = `hello, ${params.name}`
    if(country === 'Romania'){
        response.send(`${message} from Romania`)
    }
    
    
    response.send(message)
    
}

export default handleGreeting