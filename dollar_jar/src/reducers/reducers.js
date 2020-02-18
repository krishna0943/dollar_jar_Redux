const initialState={
    newUser:
      {
        Uname: '',
        id: 0
      },
      users: [],
      total: 0,
      nameError: '',
      extraCharge:0,
      name:'',
}
const reducer = (state=initialState,action) =>
{
    switch(action.type)
    {
        case "CHANGENAME":{
            return {...state, name: action.name }
        }
        case "ADDUSER":{
            let userrr = {...state.newUser}
            userrr.Uname = action.Uname;
             return {...state,
               newUser:  userrr
            }
        }
        case "ONSUBMIT":{
            let userArray = [...state.users]
                if (!state.newUser.Uname) {
                  userArray.push(state.newUser);
                console.log(userArray)
            return {...state,
                   users: userArray
                  }
                }
                break;  
        }
        case "CHANGECHARGE":{
            let tempCharge = null;
            if (action.extraCharge === '') {
                    tempCharge = ''
            } 
            else {
                    tempCharge = parseInt(action.extraCharge)
                }
            return {
                    ...state,
                    extraCharge: tempCharge
            }
        }
       
        case "HANDLEINCREMENT":{
            const temp = { ...state.users[action.value] };
            this.state.extraCharge += parseInt(this.state.extraCharge);
            this.increment(parseInt(this.state.extraCharge));
            const userss = [...this.state.users];
            userss[action.value] = temp;
            return{
                    ...state,
                    users:userss,
                    
            }
        }
        case "INCREMENT":{
            let charge={...state.users[action.value]};
            let tempTotal=this.state.tempTotal+charge;
            return{
                total:tempTotal
            }
        }
        // case "HANDLEDECREMENT":{
        //     const temp = { ...this.state.users[userIndex] };
        //     temp.charge -= parseInt(this.state.extraCharge);
        //     this.decrement(parseInt(this.state.extraCharge));
        //     const users = [...this.state.users];
        //     users[userIndex] = temp;
        //     return{
        //         users:state.users
        //     }
        // }

        // case "DECREMENT":{
        //     let tempTotal = this.state.total - charge;
        //     return{
        //         total:tempTotal
        //     }
        // }
        default:{
            return{...state}
        }
    }
}

export default reducer;