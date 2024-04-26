import useGetMessage from "../../hooks/useGetMessage";
import MessageSkeleton from "../../components/skeletons/messageSkeleton";
import Message from "./message";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [loading, messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
        <div key={message._id} ref={lastMessageRef}>
          <Message message={message} />
        </div>
      ))}
      {loading &&
        [...Array(3)].map((_, idx) => (
          <div key={idx}>
            <MessageSkeleton />
          </div>
        ))}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start conversation</p>
      )}
    </div>
  );
};

export default Messages;
