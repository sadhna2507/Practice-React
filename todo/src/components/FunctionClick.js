import React from "react";


// EVENT HANDLING IN FUNCTIONAL COMPONENT
export function FunctionClick() {
    function clickHandler(){
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick = {clickHandler}>Click</button>
    </div>
  )
}
