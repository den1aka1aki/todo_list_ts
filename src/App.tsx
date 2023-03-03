import React from 'react';
import TodoList, {TaskType} from "./TodoList";
import './App.css'


function App() {

    let taskArr1 = [
        { id: 1, title: 'CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true},
        { id: 3, title: 'React', isDone: true},
    ]
    let taskArr2: Array<TaskType> = [
        { id: 1, title: 'Terminator', isDone: true},
        { id: 2, title: 'XXX', isDone: false},
        { id: 3, title: 'Spider-man', isDone: true},
    ]
  return (
    <div className="App">
      <TodoList title="What to learn" tasks = {taskArr1}/>
      <TodoList title="Movies" tasks = {taskArr2}/>

    </div>
  );
}

export default App;
