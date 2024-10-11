import { FaClipboardCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) => {
  return (
    <li className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-5 rounded-xl w-full max-w-lg flex items-center justify-between gap-4 shadow-lg transform transition-transform duration-200 ease-in-out hover:scale-105">
      <span
        className={`flex-1 text-lg font-medium truncate ${
          checked ? "line-through text-gray-500" : "no-underline text-gray-800"
        }`}
      >
        {data}
      </span>
      <button
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        onClick={() => {
          onHandleCheckedTodo(data);
        }}
      >
        <FaClipboardCheck size={18} />
      </button>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDeleteForever size={18} />
      </button>
    </li>
  );
};

export default TodoList;
