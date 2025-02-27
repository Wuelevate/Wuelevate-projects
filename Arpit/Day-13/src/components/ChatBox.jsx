import React, { useEffect, useRef } from "react";
import { useChat } from "./ChatProvider";

const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
};

const formatDateHeader = (timestamp) => {
  const date = new Date(timestamp);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  if (date.toDateString() === today.toDateString()) return "Today";
  if (date.toDateString() === yesterday.toDateString()) return "Yesterday";

  return date.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" });
};

const ChatBox = () => {
  const { state } = useChat();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [state]);

  let lastDate = null;

  return (
    <div className="w-1/2 p-4 bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-300 rounded-xl flex flex-col shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">Chat</h2>
      <div
        ref={chatContainerRef}
        className="h-150 overflow-y-auto border border-gray-300 p-3 rounded-lg flex flex-col gap-3 bg-green-950 shadow-inner"
      >
        {state.map((msg, index) => {
          const msgDate = new Date(msg.timestamp).toDateString();
          let showDateHeader = false;

          if (msgDate !== lastDate) {
            lastDate = msgDate;
            showDateHeader = true;
          }

          return (
            <React.Fragment key={index}>
              {showDateHeader && (
               <div className="mx-auto text-gray-500 text-sm font-medium my-2 bg-gray-200 py-1 px-3 rounded-md inline-block">
               {formatDateHeader(msg.timestamp)}
             </div>
             
              )}
              <div className={`flex w-full ${msg.user === "User1" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`relative p-3 rounded-2xl max-w-xs text-sm shadow-md ${
                    msg.user === "User1"
                      ? "bg-blue-500 text-white text-right"
                      : "bg-green-500 text-white text-left"
                  }`}
                >
                  <p className="leading-snug">
                    <strong className="font-medium">{msg.user}</strong>: {msg.text}
                  </p>
                  <p className="text-xs text-gray-200 mt-1 text-right">{formatTime(msg.timestamp)}</p>
                  
                  <div
                    className={`absolute w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ${
                      msg.user === "User1"
                        ? "border-l-[10px] border-l-blue-500 right-[-6px] top-1/2 -translate-y-1/2"
                        : "border-r-[10px] border-r-green-500 left-[-6px] top-1/2 -translate-y-1/2"
                    }`}
                  />
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ChatBox;
