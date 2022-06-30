import React from "react";
import { TodoContext } from "./toDoContext";
import "../css/CreateToDo.css";

function CreateToDo() {
  const [newToDoValue, setNewToDoValue] = React.useState("");
  const { addToDo } = React.useContext(TodoContext);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    addToDo(newToDoValue);
    setNewToDoValue("");
  };

  const onChange = (e) => {
    setNewToDoValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="New To Do"
        value={newToDoValue}
        onChange={onChange}
      />
      <button className="CreateToDo" type="submit">
        Add Task
      </button>
    </form>
  );
}

export { CreateToDo };
