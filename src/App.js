import { useState } from "react";

function App() {
  const [
    newTodo,
    setNewTodo
  ] = useState("");

  const [todos, setTodos] = useState(
    []
  );

  function handleChange({ target }) {
    setNewTodo(target.value);
  }

  function handleClick() {
    setTodos([...todos, newTodo]);
  }

  return (
    <>
      <label htmlFor="create-new-todo">
        create new todo
      </label>
      <input
        value={newTodo}
        id="create-new-todo"
        onChange={handleChange}
      />
      <button onClick={handleClick}>
        save
      </button>
      {todos.map((todo) => (
        <div>{todo}</div>
      ))}
    </>
  );
}

export default App;
