import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useConversation from '../zustand/useConversation'; // Import the useConversation hook

const useGetMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
console.log(selectedConversation,messages,setMessages);
    useEffect(() => {
        if (!selectedConversation) {
            // If selectedConversation is null or undefined, do nothing
            return;
        }

        const getMessage = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${selectedConversation._id}`);
                const data = await res.json();
                if (data.error) {
                    throw new Error(data.error || 'Failed to fetch messages');
                }
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        if (selectedConversation?._id) {
            getMessage();
        }
    }, [selectedConversation, setMessages]);

    return { messages, loading };
};

export default useGetMessage;
