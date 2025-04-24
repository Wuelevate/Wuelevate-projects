import { useChat } from "../context/ChatContext";
import { useRef, useEffect } from "react";

const ChatBox = () => {
  const { state } = useChat();
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.messages]);

  return (
    <div className="w-1/2 p-4 bg-yellow-50 border rounded-lg shadow-md flex flex-col overflow-hidden">
      <div className="h-full overflow-y-auto p-2 flex flex-col space-y-3 scrollbar-custom">
        {state.messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start space-x-3 ${
              msg.sender === "Tanish" ? "justify-start" : "justify-end"
            }`}
          >
            {/* Profile Image (Only on left side) */}
            {msg.sender === "Tanish" && (
              <img
                src={
                  msg.profileImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                }
                alt={msg.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}

            {/* Message Box */}
            <div
              className={`p-3 max-w-xs rounded-lg shadow-md break-words ${
                msg.sender === "Tanish" ? "bg-green-200" : "bg-blue-200"
              }`}
            >
              <div className="text-sm font-semibold">{msg.sender}</div>
              <div className="text-md break-words">{msg.text}</div>
              <div className="text-xs text-gray-600 text-right mt-1">{msg.time}</div>
            </div>

            {/* Profile Image (Only on right side for other users) */}
            {msg.sender !== "Tanish" && (
              <img
                src={
                  msg.profileImage ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s"
                }
                alt={msg.sender}
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
    </div>
  );
};

export default ChatBox;
