import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.handelClick=this.handelClick.bind(this);
        this.state = {
            counterNumber:0
        };
    }
    componentDidCatch(){
        window.setTimeout(this.handelClick,1000)
    }
    handelClick(){
        this.setState({
            counterNumber:this.state.counterNumber + 1
        })
        window.setTimeout(this.handelClick,1000)
    }
  render() {
    return (
      <div>Counter :{this.state.counterNumber}</div>
    )
  }
}
