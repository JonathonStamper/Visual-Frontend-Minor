import Link from "next/link";
import { X, ArrowB, Undo2 } from "lucide-react";

export default function Layout({ children, backToLobby = true }) {
  return (
    <>
      <main className="relative">
        <div className="absolute text-white w-[1440px] m-auto left-0 right-0 pt-16 flex flex-row justify-between ">
          <Link href="/" className="font-bold">
            Portal Horizon.
          </Link>
          <div className="flex flex-col gap-3">
            {backToLobby && (
              <Link href="/lobby">
                <button className="bg-white text-black p-3 text-xl rounded-[50%]">
                  <Undo2 />
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
