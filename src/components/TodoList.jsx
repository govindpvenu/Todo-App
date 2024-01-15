import { TodoItem } from "./TodoItem";
import { EditTodoForm } from "./EditTodoForm";

export function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  editTodo,
  editTask,
}) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Task found"}
      {todos.map((v) => {
        if (v.isEditing) {
          return <EditTodoForm key={v.id} editTodo={editTask} task={v} />;
        } else {
          return (
            <TodoItem
              {...v}
              key={v.id}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        }
      })}
    </ul>
  );
}
