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
import Child from './Child'
import ChildB from './ChildB'
class App extends Component{    
  render(){
    const info ={
      name:"Abdullah",
      age:32
      }

    const arr = ['red','blue','green']
    const mystyle={
      backgroundColor:"lightgreen"
    }

    return (
    <div>
      <h1 style={{backgroundColor:"lightblue"}}>Hello World</h1>
      <h2 style={mystyle}>new website </h2>
      <h3 >new website </h3>
      <Child personalInfo ={info} colors={arr} />
      <ChildB manName={'fahad'} manAge={25}/>
    </div>
    )
  }
}
export default App;