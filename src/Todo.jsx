import { useEffect, useState } from "react";
// import "./Todo.css";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!inputValue) return;

    if (task.includes()) return;

    setTask((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} - ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-2xl text-blue-400 font-semibold text-center shadow-md bg-gray-800 rounded-lg p-2 mt-4 transition duration-300 hover:bg-gray-700">
            {dateTime}
          </h2>
        </header>

        <section className="w-full flex justify-center">
          <form
            className="w-full max-w-md flex mb-4"
            onSubmit={handleFormSubmit}
          >
            <div className="flex w-full max-w-xl mx-auto mb-6">
              <input
                type="text"
                className="w-full p-4 text-lg bg-gray-200 text-gray-900 rounded-l-lg border-2 border-transparent focus:border-blue-500 focus:bg-white shadow-md transition duration-300"
                autoComplete="off"
                value={inputValue}
                onChange={(event) => handleInputChange(event.target.value)}
                placeholder="Enter a task"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-2 px-6 rounded-r-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Add Task
              </button>
            </div>
          </form>
        </section>
        <section className="flex justify-center w-full">
          <ul className="flex flex-col items-center space-y-6 w-full max-w-xl">
            {task.map((curTask, index) => {
              return (
                <li
                  key={index}
                  className="bg-[#f2f3f4] text-gray-800 p-6 rounded-2xl w-full max-w-lg grid grid-cols-[1fr_0.2fr_0.2fr] items-center gap-4"
                >
                  <span className="truncate">{curTask}</span>
                  <button className="bg-green-500 text-white p-2 rounded-full hover:shadow-lg">
                    <FaClipboardCheck />
                  </button>
                  <button className="bg-red-500 text-white p-2 rounded-full hover:shadow-lg">
                    <MdDeleteForever />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </section>
    </>
  );
};

export default Todo;
