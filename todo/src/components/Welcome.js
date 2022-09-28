import React, { Component } from "react";


//CLASS COMPONENTS

// export class Welcome extends Component {
//     render() {
//         return <h1>Welcome {this.props.name} aka {this.props.heroName}</h1>
//     }
// }

// DESTRUCTURING 
export class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        
        return <h1>Welcome {name} aka {heroName}</h1>
    }
}