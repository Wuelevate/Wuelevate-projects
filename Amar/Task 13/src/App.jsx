import React from "react";
import ChatLayout from "./components/ChatLayout";
import { ChatProvider } from "./ChatContext";

function App() {
  return (
    <ChatProvider>
      <ChatLayout />
    </ChatProvider>
  );
}

export default App;
