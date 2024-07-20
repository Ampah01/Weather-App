import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  function handleInput(event) {
    setTask(event.target.value);
  }

  function handleAddTask() {
    if (task.trim() !== "") {
      setTodos((t) => [...t, task]);
      setTask("");
    }
  }

  function handleDelete(index) {
    setTodos((t) => t.filter((_, i) => i !== index));
  }

  function handleMoveUp(index) {
    if (index > 0) {
      const updatedTask = [...todos];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTodos(updatedTask);
    }
  }

  function handleMoveDown(index) {
    if (index < todos.length - 1) {
      const updatedTask = [...todos];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTodos(updatedTask);
    }
  }

  return (
    <div className="max-w-2xl px-4 py-2 mx-auto mt-10 border border-white rounded-lg shadow-md bg-white/30 backdrop-blur-lg border-opacity-30">
      <h1 className="text-xl font-semibold mb-4 text-slate-100">TODO-LIST</h1>
      <div className="first-container flex mb-4">
        <input
          type="text"
          className="input-todo flex-grow px-2 py-1 mr-2 rounded border-2 border-white bg-white outline-none text-gray-800 placeholder-gray-500"
          value={task}
          placeholder="Enter to-do here..."
          onChange={handleInput}
        />
        <button
          className="add-button button px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
      <ol className="list-decimal ">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="todo-list mb-4 flex items-center justify-between bg-white text-gray-800 px-2 py-1 rounded"
          >
            <span className="task">{todo}</span>
            <div className="buttons flex space-x-2">
              <button
                className="delete-button button px-2 py-1 bg-red-500 hover:bg-red-600 rounded text-white"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
              <button
                className="up-button px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
                onClick={() => handleMoveUp(index)}
              >
                🔺
              </button>
              <button
                className="down-button px-2 py-1 bg-blue-500 hover:bg-blue-600 rounded text-white"
                onClick={() => handleMoveDown(index)}
              >
                🔻
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
