import { useState } from "react";
import TodoForm from "./Components/TodoListForn";
import TodoList from "./Components/TodoList";
import TodoDateTime from "./Components/TodoDateTime";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;

    if (task.includes()) return;

    setTask((prev) => [...prev, inputValue]);
  };

  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  };

  const handleClearTodoData = () => {
    setTask([]);
  };
  return (
    <>
      <section className="flex flex-col items-center min-h-screen pt-12 bg-gradient-to-r from-[#001214] to-[#001f29] text-[#f0f0f0] transition duration-300 ease-linear">
        <header className="flex flex-col items-center justify-center min-h-[25vh] w-full mb-10 rounded-b-3xl shadow-lg">
          <h1 className="text-white text-6xl font-bold text-center shadow-lg mb-4">
            Todo List
          </h1>
          <p className="text-lg text-gray-200 italic text-center max-w-md px-4">
            Keep track of your tasks and stay organized effortlessly!
          </p>
          <TodoDateTime />
        </header>
        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="flex justify-center w-full">
          <ul className="flex flex-col items-center space-y-6 w-full max-w-xl">
            {task.map((curTask, index) => {
              return (
                <TodoList
                  key={index}
                  data={curTask}
                  onHandleDeleteTodo={handleDeleteTodo}
                />
              );
            })}
          </ul>
        </section>
        <section className="flex justify-center mt-6">
          <button
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleClearTodoData}
          >
            Clear all
          </button>
        </section>
      </section>
    </>
  );
};

export default Todo;
