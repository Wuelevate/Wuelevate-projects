import  {useChat}  from "../context/ChatContext";
import { useRef , useEffect } from "react";
const ChatBox = () => {
    const { state } = useChat();
    const chatEndRef = useRef(null);
  
    useEffect(() => {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [state.messages]);
  
    return (
      <div className="w-1/2 p-4 bg-yellow-50 border rounded-lg shadow-md flex flex-col overflow-hidden">
        <div className="h-full overflow-y-auto p-2 flex flex-col space-y-2 scrollbar-custom ">
          {state.messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 max-w-xs rounded-lg shadow-md break-words ${msg.sender === "Tanish" ? "bg-green-200 self-start" : "bg-blue-200 self-end"}`}
            >
              <div className="text-sm font-semibold">{msg.sender}</div>
              <div className="text-md break-words">{msg.text}</div>
              <div className="text-xs text-gray-600 text-right mt-1">{msg.time}</div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>
    );
};

export default ChatBox;