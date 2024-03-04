export const Add=(payload)=>{
    return{
        type:"ADD",
        payload:payload // objet
    }
}

export const DeleteTodo=(payload)=>{
    return{
        type:"DELETE",
        payload:payload //id
    }
}

export const CheckTodo=(payload)=>{
    return{
        type:"CHECK",
        payload:payload //id
    }
}