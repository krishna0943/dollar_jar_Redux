import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addUser,onSubmit,changeCharge,handleIncrement,Increment} from '../actions/actions';
import User from '../components/user';
class SecondPage extends Component {
 
    render() { 
        return ( 
            <div>
            <h1> hey {this.props.name} </h1>
            <h2> Total: {this.props.total}</h2>
             <input type="number" onChange={
                 this.props.changeCharge} value={this.props.extraCharge} placeholder="charge" /> <br /> <br /> 
            <input type="text" onChange={this.props.addUser} value={this.props.Uname} placeholder="username" />
            
            <input type="reset" value="Add user" onClick={this.props.onSubmit} />
            {this.props.users.map((user) => {
              return <User name={this.props.newUser} charge={this.props.extraCharge} add={() => this.props.handleIncrement(user.id)} sub={()=>this.handleDecrement(user.id)} />
            })}
          </div>
         );
    }
}

const mapStateToProps = state =>{
    return {
        name: state.name,
        newUser:state.newUser.Uname,
        users:state.users,
        extraCharge:state.extraCharge,
        total:state.total,
    }
} 
const mapStateToDispatch = dispatch =>{
    return {
        addUser:(e) => dispatch(addUser(e)),
        onSubmit:(e) => dispatch(onSubmit(e)),
        changeCharge:(e)=>dispatch(changeCharge(e)),
        handleIncrement:(id) => dispatch(handleIncrement(id)),
        Increment:(charge)=>dispatch(Increment(charge)),
        // handleDecrement:(index) => dispatch(handleDecrement(index)),
        }
    }

 
export default connect(mapStateToProps,mapStateToDispatch)(SecondPage);