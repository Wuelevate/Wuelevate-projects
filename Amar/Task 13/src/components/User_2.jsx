import React, { useState } from "react";
import { useChat } from "../ChatContext";

const RightPanel = () => {
  const [message, setMessage] = useState("");
  const { dispatch } = useChat();

  const sendMessage = () => {
    if (message.trim() !== "") {
      dispatch({
        type: "SEND_MESSAGE",
        sender: "User 2",
        text: message,
        timestamp: {
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          date: new Date().toISOString().split("T")[0], 
        },
      });
      setMessage("");
    }
  };

  return (
    <div className="w-60 bg-gray-300 p-4 rounded-lg">
      <h2 className="text-lg font-bold mb-2">User 2</h2>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="User 2 Type Here..."
        className="w-full p-2 border rounded-lg mb-2"
      />
      <button
        onClick={sendMessage}
        className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Send
      </button>
    </div>
  );
};

export default RightPanel;
