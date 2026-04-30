import { useState } from "react";

const TodoItem = ({ todo, onDelete, onToggle, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [newDesc, setNewDesc] = useState(todo.desc);
  const [error, setError] = useState("");

  const handleSave = () => {
    if (newTitle.trim().length < 6) {
      setError("La tarea debe tener al menos 6 caracteres");
      return;
    }
    onEdit(todo._id, newTitle, newDesc);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.isDone ? "done" : ""}`}>
      {isEditing ? (
        <>
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          {error && <p className="error">{error}</p>}
          <textarea
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <button onClick={handleSave}>Guardar</button>
        </>
      ) : (
        <>
          <h3>{todo.title}</h3>
          <p>{todo.desc}</p>
        </>
      )}

      <div className="actions">
        <button onClick={() => onToggle(todo._id)}>
          {todo.isDone ? "Deshacer" : "Completar"}
        </button>

        <button onClick={() => setIsEditing(!isEditing)}>
          Editar
        </button>

        <button onClick={() => onDelete(todo._id)}>
          BORRAR
        </button>
      </div>
    </div>
  );
};

export default TodoItem;