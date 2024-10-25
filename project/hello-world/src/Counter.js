import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.handelClick=this.handelClick.bind(this);
        this.state = {
            counter:0
        };
    }
    componentDidMount(){
        window.setTimeout(this.handelClick,1000)
    }
    componentDidUpdate(){
      if (this.state.counter > 5){
        this.setState({
          counter: 0
        })
      }
    }
    handelClick(){
        this.setState({
          counter:this.state.counter + 1
        })
        window.setTimeout(this.handelClick,1000)
    }
  render() {
    return (
      <div>Counter :{this.state.counter}</div>
    )
  }
}
