import Conversation from "./conversation";
import UseGetConversation from "../../hooks/useGetConversation";
import { getRandomEmoji } from "../../utils/emoji";

const Conversations = () => {
  const { loading, conversations } = UseGetConversation();

  return (
    <div className="py-2 flex flex-col overflow-auto" style={{ maxHeight: "400px" }}>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx === conversations.length - 1}
        />
      ))}
      {loading ? <span className="loading loading-spinner"></span> : null}
    </div>
  );
};

export default Conversations;
