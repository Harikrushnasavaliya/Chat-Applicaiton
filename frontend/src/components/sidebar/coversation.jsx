import React from "react";

const coversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flec-col flex-1">
          <div className="flex-gap-3 justify-between">
            <p className="font-bold text-white">Harekrushna Savaliya</p>
          </div>
        </div>
        <span className="text-xl">🤣</span>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};

export default coversation;
