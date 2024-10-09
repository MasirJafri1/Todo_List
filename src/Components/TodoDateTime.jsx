import { useEffect, useState } from "react";

const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState("");

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
    <h2 className="text-2xl text-blue-400 font-semibold text-center shadow-md bg-gray-800 rounded-lg p-2 mt-4 transition duration-300 hover:bg-gray-700">
      {dateTime}
    </h2>
  );
};

export default TodoDateTime;
