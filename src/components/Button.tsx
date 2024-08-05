import React from "react";

export default function Button({ text }: any) {
  return (
    <div>
      <button
        type="button"
        className=" border focus:ring-4 focus:outline-none  font-semibold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border-purple text-purple hover:text-white hover:bg-purple focus:ring-orange-900"
      >
        {text}
      </button>
    </div>
  );
}
