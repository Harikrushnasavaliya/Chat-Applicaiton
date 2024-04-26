import React, { useState } from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (newMessage) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: newMessage }) // Assuming the parameter is newMessage, not message
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            // Append the new message to the existing messages array
            setMessages([...messages, data]); // Use messages instead of message
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading };
};

export default useSendMessage;
