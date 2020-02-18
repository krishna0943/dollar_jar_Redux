import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {changeName} from '../actions/actions';
class Home extends Component {
    state = { name:"" }
    render() { 
        return ( 
        <div>
          <h1> Dollar Jar </h1>
          <input type="text" onChange={this.props.changeName} placeholder="name" value={this.props.name}/> <br/><br/>
            
          <Link to = {{ 
              pathname:"/user",name:this.props.name}}> 
          <button disabled={!this.props.name.trim()}> submit</button>
          </Link> 
        </div>
         );
    }
}
const mapStateToProps = state =>{
    return {
        name: state.name
    }
} 
const mapStateToDispatch = dispatch =>{
    return {
        changeName: (e) => dispatch(changeName(e))
        }
    }


export default connect(mapStateToProps,mapStateToDispatch)(Home);