import React from 'react';
import Chirps from './Chirps';

class Forms extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            message: '',
            chirps: [{
                text:"First Chirp! Cheep cheep!",
                key: 0
            },
            {
                text: "ANOTHER CHEEP!!",
                key:1
            },
            {
                text: "Some many chip chirps!",
                key: 2
            }
            ]
        };
        
    }
    handleClick () {
        // in this function, we can access this.state.message
        // this.state.message is always up to date; its value is whatever is typed in the box
        
        // we need to "package up" a new chirp into an object literal
    }

    render () {
        return(
            <div>
                <div className = "border border-success w-75 mx-auto p-3 text-left">
                <div className = "text-success p-2">Create a Chirp </div>
                <input className="textBox"
                placeholder = "New Chirp"
                value = {this.state.message}
                onChange = {(event) => { this.setState({ message: event.target.value }) }}
                />
                <div>
                <button className="postBtn text-success m-2"
                onClick = {(event) => {this.handleClick()}}
                >Post! </button>
                </div>
                </div>
                <Chirps chirps={this.state.chirps} /> 
            </div>
        );
    }
};

export default Forms;