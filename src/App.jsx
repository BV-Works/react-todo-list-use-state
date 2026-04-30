import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { initialTodos } from "./data/todos";

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [success, setSuccess] = useState("");

  const addTodo = (title, desc) => {
    const newTodo = {
      _id: uuidv4(),
      title,
      desc,
      isDone: false,
    };

    setTodos((prev) => [...prev, newTodo]);

    setSuccess("Tarea añadida");
    
    setTimeout(() => {
      setSuccess("");
    }, 5000);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo._id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const resetTodos = () => {
    setTodos(initialTodos);
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const editTodo = (id, newTitle, newDesc) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo._id === id
          ? { ...todo, title: newTitle, desc: newDesc }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <h1>TODO LIST</h1>

      <TodoForm onAdd={addTodo} />

      {success && <p className="success">{success}</p>}

      <div className="controls">
        <button onClick={clearTodos}>CLEAR</button>
        <button onClick={resetTodos}>RESET</button>
      </div>
      
      {todos.length > 0 ?
      
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
        onEdit={editTodo}
      />

      :

      <p>No hay tareas</p>
      }
    </div>
  );
}

export default App;