import React, {Component} from "react";

export class EventBind extends Component {

    constructor(props){
        super(props)

        this.state = {
            message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)   ==>third appraoch binding event handlers
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye"
    //     })
    //     console.log(this) // it will give undefined because 'this' keyword within the eventhadler is undefined if we use binding methods it will wrk
    // }
    // render() {
    //     return(
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={this.clickHandler}>Click</button>
    //         </div>
    //     )
    // }

    // 1 ==> first method to bind event handlers ----> bind it within the render method

    // render() {
    //     return(
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={this.clickHandler.bind(this)}>Click</button>
    //         </div>
    //     )
    // }

    // 2 ==> second method to bind event handlers ----> use Arrow function the render method

    // render() {
    //     return(
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={() => this.clickHandler()}>Click</button>
    //         </div>
    //     )
    // }

    // 3 ==> third method to bind event handlers ----> binding the event handler in the constructor

    // render() {
    //     return(
    //         <div>
    //             <div>{this.state.message}</div>
    //             <button onClick={this.clickHandler}>Click</button>
    //         </div>
    //     )
    // }

    // 4 ==> forth method to bind event handlers ----> use arrow function as a class property

    clickHandler = () => {
        this.setState({
            message: "Good Bye!!"
        })
    }

    render() {
        return(
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}