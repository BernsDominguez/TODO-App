import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from './AppUI';

// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso completo', completed: true },
//   { text: 'Llorar con la llorona', completed: false }
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
