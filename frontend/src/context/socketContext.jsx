import { createContext, useContext, useEffect, useState } from "react";
import io from 'socket.io-client';
import useAuthContext from "./authContext";

const SocketContext = createContext();

export const UseSocketContext = () => {
    return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUser, setOnlineUser] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const newSocket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                }
            });
            setSocket(newSocket);
            newSocket.on("getOnlineUser", (users) => {
                setOnlineUser(users);
            });
            return () => newSocket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            {children}
        </SocketContext.Provider>
    );
};
