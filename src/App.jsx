import { useState, useEffect } from "react"
import "./styles.css"
import { NewTodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  function editTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing }
        }
        return todo
      })
    })
  }

  const editTask = (task, id) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: task, isEditing: !todo.isEditing }
        }
        return todo
      })
    })
  }

  return (
    <>
      <h1>Get Things Done!</h1>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} editTodo={editTodo} deleteTodo={deleteTodo} editTask={editTask} />
    </>
  )
}
