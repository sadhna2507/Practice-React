import React, { Component } from "react";



export class Message extends Component {

    constructor() {
        super()
        this.state = {
            message : "Welcome Visitor"
        }
    }

    changeMessage() {
        this.setState({
            message : "Thankyou for Subscribing"
        })
    }



    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}