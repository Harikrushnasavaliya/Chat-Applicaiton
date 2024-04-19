// import React from "react";
// import Sidebar from "../../components/sidebar/sidebar"; // Assuming Sidebar component is in the same directory
// import MessageContainer from "../../components/messages/messageContainer"; // Assuming Sidebar component is in the same directory

// const Home = () => {
//   return (
//     <div className="flex sm:h-[450px md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <Sidebar />
//       <MessageContainer />
//     </div>
//   );
// };

// export default Home;
import MessageContainer from "../../components/messages/messageContainer";
import Sidebar from "../../components/sidebar/sidebar";
const Home = () => {
  return (
    <div className="flex h-300 w-400">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
