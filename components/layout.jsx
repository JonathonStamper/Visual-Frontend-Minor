import Link from "next/link";
import { Plus, Minus, HomeIcon } from "lucide-react";
import Loading from "./Loading";
import { useState, useEffect } from "react";

export default function Layout({ children, data, backToLobby = true }) {
  const handleZoomIn = () => {
    if (data) {
      data.current.position.z -= 3000;
    }
  };
  const handleZoomOut = () => {
    if (data) {
      data.current.position.z += 3000;
    }
  };

  return (
    <>
      <main className="relative">
        <div className="absolute text-white w-[1440px] m-auto left-0 right-0 pt-16 flex flex-row justify-between ">
          <Link href="/" className="font-bold">
            Portal Horizon.
          </Link>
          <div className="flex flex-col gap-3">
            {data && (
              <>
                <button
                  className="bg-white text-black p-3 text-xl rounded-[50%]"
                  onClick={handleZoomIn}
                >
                  <Plus />
                </button>
                <button
                  className="bg-white text-black p-3 text-xl rounded-[50%]"
                  onClick={handleZoomOut}
                >
                  <Minus />
                </button>
              </>
            )}
            {backToLobby && (
              <Link href="/lobby">
                <button className="bg-white text-black p-3 text-xl rounded-[50%]">
                  <HomeIcon />
                </button>
              </Link>
            )}
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
wd;
