import React from "react";
import { TodoContext } from "./toDoContext";
import "../css/ToDoCounter.css";

function ToDoCounter() {
  const {totalToDos, completedToDos} = React.useContext(TodoContext)

    
  return (
    <div>
      <h1 className="ToDoCounter">To-Do App</h1>
      <h3 className="smallToDoCounterText">What do you need to do?</h3>
      <p className="smallToDoCounterText"> You has completed {completedToDos} task(s) of {totalToDos}</p>
    </div>
  );
}

export { ToDoCounter };
