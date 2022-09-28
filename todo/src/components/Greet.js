import React from "react"

// FUNCTIONAL COMPONENTS

// function Greet() {
//     return <h1> Hey Sadhna</h1>
// }

// using Arrow function
// export const Greet = (props) => {
//     console.log(props)
//     return(
//         <div>
//             <h1> Hey {props.name} aka {props.heroName}</h1>
//             {props.children}
        
//         </div>
//     ) 
// }


// DESTRUCTURING in props has two methods

// 1 ==> destructure in the function parameter itself

// export const Greet = ({name, heroName}) => {
//     return(
//         <div>
//             <h1> Hey {name} aka {heroName}</h1>
              
//         </div>
//     ) 
// }


// 2 ==> destructure in the function body

export const Greet = (props) => {
    const {name, heroName} =props
    return(
        <div>
            <h1> Hey {name} aka {heroName}</h1>
        
        </div>
    ) 
}


