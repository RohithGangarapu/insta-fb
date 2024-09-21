import React,{Component} from 'react'
export default class Display extends Component{
    state={name:'Rohith'}
    render(){
        return(<div><h1>{this.props.props}</h1></div>);
    }
}