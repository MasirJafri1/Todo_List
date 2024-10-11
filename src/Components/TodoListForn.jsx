import { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };
 return (
   <section className="w-full flex justify-center">
     <form className="w-full max-w-md flex mb-4" onSubmit={handleFormSubmit}>
       <div className="flex w-full max-w-xl mx-auto mb-6">
         <input
           type="text"
           className="w-full p-4 text-lg font-semibold text-gray-900 bg-gray-200 rounded-l-lg border-2 border-transparent focus:border-blue-500 focus:bg-white shadow-md transition duration-300 placeholder-gray-500 placeholder-opacity-75 focus:placeholder-opacity-50"
           autoComplete="off"
           value={inputValue.content}
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
 );

};

export default TodoForm;
