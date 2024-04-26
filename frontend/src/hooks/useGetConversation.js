import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/users');
                console.log(res);
                const data = await res.json();
                console.log(data);
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getConversation();
    }, []);
    return { loading, conversations, messages, setMessages }; 
};

export default useGetConversation;
