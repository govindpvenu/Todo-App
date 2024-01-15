export function TodoItem({
  completed,
  id,
  title,
  toggleTodo,
  deleteTodo,
  editTodo,
}) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <label>
        <input
          onChange={(e) => toggleTodo(id, e.target.checked)}
          checked={completed}
          type="checkbox"
        />
        {title}
      </label>
      <div>
        <button onClick={() => editTodo(id)} className="btn btn-info">
          Edit
        </button>
        <span> </span>
        <button onClick={() => deleteTodo(id)} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  );
}
