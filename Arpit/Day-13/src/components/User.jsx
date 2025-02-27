import React, { useState } from "react";
import { useChat } from "./ChatProvider";

const User = ({ name }) => {
  const { dispatch } = useChat();
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      dispatch({
        type: "SEND_MESSAGE",
        payload: { user: name, text: message, timestamp: Date.now() },
      });
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col p-6 w-1/4 h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">{name}</h2>

      <input
        className="border border-gray-300 p-3 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />

      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition active:scale-95"
      >
        Send
      </button>
    </div>
  );
};

export default User;
