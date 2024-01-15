import { useState } from "react";

export function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.title);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("--task--");
    console.log(task);
    console.log("--value--");
    console.log(value);
    editTodo(value, task.id);
  };
  return (
    <form
      style={{ display: "flex", justifyContent: "space-between" }}
      className="edit-item-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        id="item"
        placeholder="Update task"
      />
      <button type="submit" className="btn btn-info">
        Save
      </button>
    </form>
  );
}
