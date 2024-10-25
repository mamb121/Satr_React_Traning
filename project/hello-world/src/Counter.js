import React, { Component } from 'react'
import UnmountComponent from './UnmountComponent';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.handelClick=this.handelClick.bind(this);
        this.removeUnmountComponent=this.removeUnmountComponent.bind(this);
        this.state = {
            counter:0,
            show:true,
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
    removeUnmountComponent(){
      this.setState({
        show:false
      })
    }
  render() {
    return (
      <div>
        <h1>Counter :{this.state.counter}</h1>
        {this.state.show ? <UnmountComponent/> : null}
        <button onClick={this.removeUnmountComponent} >Remove Unmount Component</button>
      </div>
    )
  }
}
