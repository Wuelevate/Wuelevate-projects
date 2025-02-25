import React from "react";
import ChatMessages from "./ChatMessages";
import InputField from "./InputField";

const ChatBox = () => {
  return (
    <div className="flex flex-col h-[90vh] w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Chat Messages */}
      <ChatMessages />

      {/* Input Field */}
      <InputField />
    </div>
  );
};

export default ChatBox;
