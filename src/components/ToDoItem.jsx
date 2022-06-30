import React from "react";
import "../css/ToDoItem.css";

function ToDoItem({ onCompletedToDo, id, text, onDeletedToDo, isCompleted }) {
  return (
    <div className="ToDoItem">
      <input
        checked={isCompleted}
        type="checkbox"
        onChange={() => onCompletedToDo(id)}
      />

      <article className="articulesInParagraph">
        <p>{text}</p>
      </article>

      <button onClick={onDeletedToDo}>Remove</button>
    </div>
  );
}

export { ToDoItem };
