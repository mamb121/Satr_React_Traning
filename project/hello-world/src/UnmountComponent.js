import React, { Component } from 'react'

export default class UnmountComponent extends Component {
    componentWillUnmount(){
        alert('the component removed')
    }
  render() {    
    return (
      <div>
        <h2>Chiled Component</h2>
      </div>
    )
  }
}
