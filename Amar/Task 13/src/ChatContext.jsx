import React, { createContext, useReducer, useContext } from "react";

// Create Chat Context
const ChatContext = createContext();

// Initial Chat State
const initialState = [];

// Reducer Function
const chatReducer = (state, action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [
        ...state,
        {
          sender: action.sender,
          text: action.text,
          timestamp: action.timestamp,
        }];

    case "CLEAR_CHAT":
      return [];
    default:
      return state;
  }
};

// Context Provider
export const ChatProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

// Custom Hook
export const useChat = () => useContext(ChatContext);
