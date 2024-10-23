import React, { Component } from 'react';
class Child extends Component {
    render (){
        const listColors = this.props.colors.map((color,index)=> 
        <li key={index}>
            {color}
        </li>
        )
        return (
            <div>
                <h1>Child Component</h1>
                <h2>Hello {this.props.personalInfo.name}</h2>
                <h2>your Age is {this.props.personalInfo.age}</h2>
                <ul>
                    {listColors}
                </ul>
            </div>
        )
    }
}
export default Child;