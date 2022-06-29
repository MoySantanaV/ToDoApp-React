import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const { item: toDos, saveItem: saveToDos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedToDos = toDos.filter(toDo => toDo.isCompleted).length;
    const totalToDos = toDos.length;
    
    const [unfilter, setUnfilter] = React.useState([]);
    
 
    let searchedToDos = [];
  
    if (!searchValue.length >= 1) {
      searchedToDos = toDos;
    } else {
      searchedToDos = toDos.filter(toDo => {
        const toDoText = toDo.textOfTask.toLowerCase().trim()
        const searchText = searchValue.toLowerCase().trim()
        return toDoText.includes(searchText);
  
      })
    }
  
  
  
    const completeToDos = (id) => {
      saveToDos(toDos.map((toDo) => toDo.id === id ? { ...toDo, isCompleted: !toDo.isCompleted } : toDo))
    }
  
    const deleteToDos = (textOfTask) => {
      const toDoIndex = toDos.findIndex(toDo => toDo.textOfTask === textOfTask);
      const newToDos = [...toDos];
      newToDos.splice(toDoIndex, 1);
      saveToDos(newToDos);
    }
  
    const addToDo = (textOfTask) => {
      const newTodos = [...toDos];
        newTodos.push({
        id: newTodos.length === 0 ? 1 : newTodos[newTodos.length-1].id + 1,

        textOfTask,
        isCompleted: false,
      });
      console.log(newTodos)
      saveToDos(newTodos);
    };

    const hideToDos = (hide) => {

      if(!hide){
        saveToDos(unfilter)
        return null
      }
      setUnfilter([...toDos])
      const hideCompletedToDos = toDos.filter(toDo => !toDo.isCompleted);
      saveToDos(hideCompletedToDos)
    }

  return (
    <TodoContext.Provider value = {{
      loading,
      error,
      totalToDos,
      completedToDos,
      searchValue,
      setSearchValue,
      searchedToDos,
      addToDo,
      completeToDos,
      deleteToDos,
      saveToDos,
      hideToDos,

    }}>
        {props.children}
    </TodoContext.Provider>
  )
}



export {TodoContext, TodoProvider}