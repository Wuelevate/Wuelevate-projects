import React from "react";
import LeftPanel from "./User_1";
import RightPanel from "./User_2";
import ChatMessages from "./ChatMessages";

const ChatLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="flex w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Panel for User 1 */}
        <LeftPanel />

        {/* Chat Messages Display */}
        <div className="flex-1 flex flex-col p-4">
          <ChatMessages />
        </div>

        {/* Right Panel for User 2 */}
        <RightPanel />
      </div>
    </div>
  );
};

export default ChatLayout;
