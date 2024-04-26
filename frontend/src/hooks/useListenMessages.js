import React, { useEffect } from 'react'
import { UseSocketContext } from '../context/socketContext' // Corrected import case
import UseGetConversation from './useGetConversation' // Corrected import case

const useListenMessages = () => {
    const { socket } = UseSocketContext(); 
    const { messages, setMessages } = UseGetConversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            // Ensure messages is initialized as an array
            const updatedMessages = Array.isArray(messages) ? [...messages, newMessage] : [newMessage];
            setMessages(updatedMessages);
        });
        return () => socket?.off("newMessage");
    }, [socket, setMessages, messages]);
};

export default useListenMessages;
