import React, { useRef, useEffect, useState } from "react";
import { useChat } from "../ChatContext";
import { motion } from "framer-motion";
import "../App.css"; 

const ChatMessages = () => {
    const { state } = useChat();
    const chatEndRef = useRef(null);


    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [state]);


    return (
        <div className="w-[600px] h-96 rounded-lg bg-[#1b3157] overflow-y-auto">
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {state.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === "User 1" ? "justify-start" : "justify-end"}`}
                    >
                        <motion.div
                            className={`p-3 rounded-2xl max-w-[60%] relative ${msg.sender === "User 1"
                                    ? "bg-blue-400 min-w-40 max-w-60 text-white rounded-bl-none"
                                    : "bg-green-400 min-w-40 max-w-60 text-white rounded-br-none"
                                } break-words whitespace-pre-wrap`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {/* <strong className="block">{msg.sender}: </strong> */}
                            <p className="break-words whitespace-pre-wrap mb-2">{msg.text}</p>
                            <p className="text-[12px] mt-2 text-gray-200 absolute right-3 bottom-1">
                                {msg.timestamp?.time || "No Time"} | {msg.timestamp?.date || "No Date"}
                            </p>
                        </motion.div>
                    </div>
                ))}
                <div ref={chatEndRef}></div>
            </div>
        </div>
    );
};

export default ChatMessages;
