import React from 'react';
function ChildB (props) {
        return (
            <div>
                <h1>Child B Component</h1>
                <h2>Hello {props.manName}</h2> 
                <h2>Age is {props.manAge}</h2>                
            </div>
        )
    }
export default ChildB;