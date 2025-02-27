import React, { createContext, useReducer, useContext } from "react";

const ChatContext = createContext();

const chatReducer = (state, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [...state, { ...action.payload, timestamp: Date.now() }];

    default:
      return state;
  }
};

export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, []);

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
