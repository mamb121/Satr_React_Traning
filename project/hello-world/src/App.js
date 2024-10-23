/*function App(){
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default App; */
import React,{Component} from 'react';
import './App.css';
class App extends Component{
  render(){
    const mystyle={
      backgroundColor:"lightgreen"
    }

    return (
    <div>
      <h1 style={{backgroundColor:"lightblue"}}>Hello World</h1>
      <h2 style={mystyle}>new website </h2>
      <h3 >new website </h3>
    </div>
    )
  }
}
export default App;