import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
    callApi = ()=>{
        axios.get("")
    }
  render() {
    return (
      <div>
        Thid Party API
      </div>
    )
  }
}
