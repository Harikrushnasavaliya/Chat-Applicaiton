import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";
import UseGetConversation from "../../hooks/useGetConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation}= useConversation();
  const {conversations}= UseGetConversation();
  console.log(":::{",conversations);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('must be 3 letter')
    }

    const conversation = conversations.find ((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    console.log("{",conversation);

    if(conversation){
      setSelectedConversation(conversation);
      setSearch("");
    }else toast.error("User Not Found")
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-10">
      <input
        type="text"
        placeholder="Search...."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle">
        <FiSearch className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
