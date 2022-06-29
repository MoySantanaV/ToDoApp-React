import React from "react";
import { TodoContext } from "./toDoContext";
import { ToDoCounter } from "./ToDoCounter";
import { ToDoSearch } from "./ToDoSearch";
import { ToDoList } from "./ToDoList";
/* import { ToDoItem } from '../components/ToDoItem' */
import { CreateToDo } from "./CreateToDo";

function AppUI() {
  const {
    searchedToDos,
    completeToDos,
    deleteToDos,
    saveTodos,
    error,
    loading,
  } = React.useContext(TodoContext);

  return (
    <div className="Container">
      <ToDoCounter />
      <ToDoSearch />

      <ToDoList
        toDos={searchedToDos}
        completeToDos={completeToDos}
        deleteToDos={deleteToDos}
        saveTodos={saveTodos}
        />
        {error && <p>Huston we got a problem!</p>}
        {loading && <p>Loading, plese wait...</p>}
        {!loading && !searchedToDos.length && (
          <p>Time to create your first to-do!</p>
        )}


      <CreateToDo />
    </div>
  );
}

export { AppUI };
