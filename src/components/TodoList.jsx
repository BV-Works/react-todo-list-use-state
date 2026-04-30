import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;