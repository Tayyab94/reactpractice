
function Message(){
    const name=""
    if(name)
        return <h2 className="text-info">Welcom {name}</h2>
    
    return <h2 className="text-danger">Hello World</h2>
}

export default Message;