/* eslint-disable react/prop-types */

import React from "react";
import {useChat}  from "../context/ChatContext";
import { formatTime } from "../utils/FormatTime";
import { generateId } from "../utils/GenerateId";

const UserPanel = ({ name , image }) => {
    const { dispatch } = useChat();
    const [message, setMessage] = React.useState("");
  
    const sendMessage = () => {
      if (!message.trim()) return;
      dispatch({
        type: "SEND_MESSAGE",
        payload: {
          id: generateId(),
          text: message,
          sender: name,
          time: formatTime(),
          profileImage : image ,
        },
      });
      setMessage("");
    };
  
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        sendMessage();
      }
    };
  
    return (
      <div className="w-1/4 p-4 bg-white border rounded-lg shadow-md flex flex-col relative">
        <div className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <img src={image} alt="avatar" className="w-10 h-10 rounded-full mr-2" />
            <h2 className="text-lg font-bold">{name}</h2>
          </div>
          <div className="text-gray-600 cursor-pointer">⋮</div>
        </div>
        <div className="mt-auto flex relative">
          <input
            type="text"
            className="flex-1 p-2 border rounded-l-md break-words"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type a message..."
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-md"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    );
};

export default UserPanel;

