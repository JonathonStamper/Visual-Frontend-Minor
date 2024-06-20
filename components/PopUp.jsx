import React, { useState } from "react";

export default function PopUpAnimation({ data, setIsOpen }) {
  return (
    <div className="flex absolute items-center justify-center w-full  ">
      <div className="PopUpAnimation flex flex-col gap-4 p-5 pt relative shadow-black shadow-2xl bg-white w-[45%] h-[350px] rounded-2xl">
        <button
          onClick={() => {
            setIsOpen(false);
          }}
          className="absolute top-0 right-0 m-5"
        >
          <X />
        </button>
        <h3 className="font-bold text-2xl">{data.title}</h3>
        <p className="font-medium text-lg">{data.paragraph}</p>
      </div>
    </div>
  );
}

const X = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
    </svg>
  );
};
