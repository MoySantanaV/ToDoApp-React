import React from 'react';
import { AppUI } from './components/AppUI';
import { TodoProvider } from './components/toDoContext';

import './App.css';

function App() {
 
  return (
    <TodoProvider>

      <AppUI/>

    </TodoProvider>
  );
}

export { App };

