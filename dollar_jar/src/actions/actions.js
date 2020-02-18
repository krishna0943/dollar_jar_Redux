export const changeName = e =>{
    return{
        type:'CHANGENAME',
        name:e.target.value,
        
    }
}

export const addUser = e =>{
    return{
        Uname: e.target.value,
        type:'ADDUSER'
    }
}

export const changeCharge = e =>{
    console.log(e.target.value)
    return{
      extraCharge: e.target.value,
      type : 'CHANGECHARGE',
    }
  }

export const onSubmit = e =>{
    return{
        value:e.target.value,
        type:'ONSUBMIT',
    }
}

export const handleIncrement = id => {
    return{
        value:id,
        type:'HANDLEINCREMENT',
    }
}

export const Increment = charge => {
    return{
        value:charge,
        type:'INCREMENT',
    }
}

export const handleDecrement = id => {
    return{
        value:id,
        type:'HANDLEDECREMENT',
    }
}

export const decrement = charge => {
    return{
        value:charge,
        type:'DECREMENT',
    }
}




