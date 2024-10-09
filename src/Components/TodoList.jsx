import { FaClipboardCheck } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

const TodoList = ({ key, data, onHandleDeleteTodo }) => {
  return (
    <li
      key={key}
      className="bg-[#f2f3f4] text-gray-800 p-6 rounded-2xl w-full max-w-lg grid grid-cols-[1fr_0.2fr_0.2fr] items-center gap-4"
    >
      <span className="truncate">{curTask}</span>
      <button className="bg-green-700 text-white py-2 px-6 rounded-full hover:shadow-lg ">
        <FaClipboardCheck />
      </button>
      <button
        className="bg-red-600 text-white py-2 px-6 rounded-full hover:shadow-lg"
        onClick={() => onHandleDeleteTodo(data)}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};

export default TodoList;
