import { useEffect, useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!title && !desc) return;

    const timer = setTimeout(() => {
      setTitle("");
      setDesc("");
    }, 7000);

    return () => clearTimeout(timer);
  }, [title, desc]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim().length < 6) {
      setError("La tarea debe tener al menos 6 caracteres");
      return;
    }

    onAdd(title, desc);
    setTitle("");
    setDesc("");
    setError("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la tarea"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Descripción"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      {title.trim() && (
        <button type="submit" className="add-btn">
          ADD
        </button>
      )}
    </form>
  );
};

export default TodoForm;