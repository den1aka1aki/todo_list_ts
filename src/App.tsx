import React from 'react';
import Todo_list from "./Todo_list";
import './App.css'


function App() {
  return (
    <div className="App">
      <Todo_list title="What to learn"/>
      <Todo_list title="Movies"/>
      <Todo_list title='Songs'/>
    </div>
  );
}

export default App;
