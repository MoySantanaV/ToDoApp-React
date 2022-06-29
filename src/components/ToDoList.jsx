import React from "react";
import "../css/ToDoList.css";
import { ToDoItem } from "./ToDoItem";

function ToDoList({ toDos, saveToDos, completeToDos, deleteToDos }) {
  return (
    <section className="ToDoList">
      {toDos &&
        toDos.map((ele) => (
          <ToDoItem
            key={ele.id}
            text={ele.textOfTask}
            id={ele.id}
            isCompleted={ele.isCompleted}
            onCompletedToDo={completeToDos}
            onDeletedToDo={() => deleteToDos(ele.textOfTask)}
            saveToDos={saveToDos}
          />
        ))}
    </section>
  );
}

export { ToDoList };
