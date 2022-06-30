import React from "react";
import "../css/ToDoSearch.css";
import { TodoContext } from "./toDoContext";

function ToDoSearch() {
  const { searchValue, setSearchValue, hideToDos } =
    React.useContext(TodoContext);

  const onChangeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const onHide = (e) => {
    hideToDos(e.target.checked);
  };

  return (
    <div>
      <form action="" className="ToDoSearch">
        <input
          placeholder="Filter To Do"
          value={searchValue}
          onChange={onChangeSearchValue}
        />
        <input
          type="checkbox"
          name=""
          id="checkboxHideCompleted"
          onChange={onHide}
        />
        <label htmlFor="checkboxHideCompleted"> Hide Completed</label>
      </form>
    </div>
  );
}

export { ToDoSearch };
