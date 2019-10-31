import React, { Component } from 'react'
import {connect} from "react-redux"
import{addList} from "../action/action"


class Add extends Component {
    constructor(props){
        super(props)
        this.state={
            newTodo:""
        }
    }
    handleChange=e=>{
        this.setState({
            newTodo:e.target.value
        })
    }
    handleClick=()=>{
        this.props.addList(this.state.newTodo)
        this.setState({
            newTodo:""
        })
    }

   
    render() {
        return (
            <div>
                <input type="text"value={this.state.newTodo} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>ADD</button>
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        addList:payload=>{
            dispatch(addList(payload))
        }
    }
}

export default connect(null,mapDispatchToProps)(Add)
