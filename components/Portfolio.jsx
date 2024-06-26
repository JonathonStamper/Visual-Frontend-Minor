import React from 'react'

export default function Portfolio({data, setIsOpen}) {
  return (
    <div className="flex absolute h-screen top-0 right-0 items-center justify-end w-full py-10 mx-12 overflow-hidden z-0">
    <div className="PopUpAnimation text-black shadow-black shadow-2xl bg-white flex flex-col relative gap-4 p-5 pt  w-[50%] h-full rounded-2xl overflow-y-scroll">
      <button
        onClick={() => {
          setIsOpen(false);
        }}
        className="absolute top-0 right-0 m-5"
      >
        <X />
      </button>
      <div className="font-bold text-5xl">{data.title}</div>
      <div className="">{data.content}</div>
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