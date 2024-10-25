import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      imageurl:''
    }
  }
  componentDidMount(){
    this.callApi()
  }
    callApi = ()=>{
        axios.get("https://api.thecatapi.com/v1/images/search")
        .then((response) =>{
          console.log(response.data[0].url)
          this.setState({imageurl: response.data[0].url})
        }).catch((error)=>{
          console.log(error)
        })
    }
  render() {
    return (
      <div>
        Thid Party API
        <div>
          the image url is : {this.state.imageurl}
          <br></br>
          <img src={this.state.imageurl} alt='cat' width='100' height='100'/>
        </div>
      </div>
    )
  }
}
