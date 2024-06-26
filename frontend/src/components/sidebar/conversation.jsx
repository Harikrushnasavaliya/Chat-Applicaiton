// import React from "react"; // Import React
import { UseSocketContext } from "../../context/socketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUser} = UseSocketContext();
  const isOnline = onlineUser?.includes(conversation._id);
  return (
    <>
      <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline?"online":"offline"}`}>
          <div className="w-12 rounded-full">
            <img
              src={conversation.profilePic}
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flec-col flex-1">
          <div className="flex-gap-3 justify-between">
            <p className="font-bold text-white">{conversation.fullName}</p>
          </div>
        </div>
        <span className="text-xl">{emoji}</span>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation

