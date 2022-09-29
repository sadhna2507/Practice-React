import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Greet} from "./components/Greet"
import { Welcome } from "./components/Welcome"
import { Message } from "./components/Message"
import { Counter } from "./components/Counter"
import { FunctionClick } from "./components/FunctionClick"
import { ClassClick } from "./components/ClassClick"
import { EventBind } from "./components/EventBind"
import { NewProject } from './components/NewProject';

class App extends Component {
  render() {
    return (
      <div className='App' >

        <NewProject/>

        {/* <EventBind/> */}

        {/* <ClassClick/> */}

        {/* <FunctionClick/> */}

        {/* <Counter/> */}
        
        {/* <Message/> */}
        
        {/* <Greet name = "Bruce" heroName = "Batman">
          <p>This is children Props</p>
        </Greet> */}
        {/* <Greet name = "Clark" heroName = "Superman">
          <button>Action</button>
        </Greet> */}
        {/* <Greet name = "Diana"heroName = "Wonder Women"/> */}


        {/* <Welcome name = "Bruce" heroName = "Batman"/>
        <Welcome name = "Clark" heroName = "Superman"/> */}
        {/* <Welcome name = "Diana"heroName = "Wonder Women"/> */}
      </div>
    )
  }
}

export default App;
