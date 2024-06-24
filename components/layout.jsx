import Link from "next/link";
import { useRouter } from "next/router";
import { Undo2, Camera } from "lucide-react";

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
      <div className="relative">
        <div className="absolute text-white w-[1440px] m-auto left-0 right-0 pt-16 flex flex-row justify-between ">
          <Link href="/" className="font-bold">
            Portal Horizon.
          </Link>
          <div className="flex flex-col gap-3">
            <button
              className="bg-white text-black p-3 text-xl rounded-[50%]"
              onClick={() => router.back()}
            >
              <Undo2 />
            </button>
            <button className="bg-white text-black p-3 text-xl rounded-[50%]">
              <Camera />
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  );
}
