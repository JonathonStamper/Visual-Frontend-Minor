import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function Layout({ children, data }) {
  console.log(data.current);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    data.current.position.z -= 3000;
  };

  const handleZoomOut = () => {
    data.current.position.z += 3000;
  };
  return (
    <>
      <main className="relative">
        <div className="absolute text-white w-[1440px] m-auto left-0 right-0 pt-16 flex flex-row justify-between ">
          <Link href="/" className="font-bold">
            Portfolio.
          </Link>
          <div className="flex flex-col gap-3">
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
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
