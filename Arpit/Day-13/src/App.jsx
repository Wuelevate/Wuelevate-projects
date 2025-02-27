import React from "react";
import { ChatProvider } from "./Components/ChatProvider";
import User from "./Components/User";
import ChatBox from "./Components/ChatBox";

const App = () => {
  return (
    <ChatProvider>
      <div className="flex gap-4 p-8 h-screen items-center justify-center">
        <User name="User1" />
        <ChatBox />
        <User name="User2" />
      </div>
    </ChatProvider>
  );
};

export default App;
