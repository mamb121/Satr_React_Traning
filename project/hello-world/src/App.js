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
import Counter from './Counter'
class App extends Component{    
  constructor(props){
    super(props)
    this.state = {
      counter:0,
      showCounter:true,
    }
  }
  changeCounter=()=>{
    this.setState({counter:25})
  }
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
      <div>
        <h4>TheCounter is {this.state.counter}</h4>
        <h4>show Counter {this.state.showCounter?<div>on</div>:<div>off</div>}</h4>
        <button onClick={this.changeCounter()}>change Counter</button>
      </div>
      <br></br>
      <div style={{backgroundColor:'lightgray', paddingTop:'5px'}} >
        <Counter/>
      </div>
    </div>
    )
  }
}
export default App;