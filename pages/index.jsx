import { Inter } from "next/font/google";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const door = useRef();
  const [open, setOpen] = useState(false);

  function onMouseDown(e) {
    if (e.target.name === "bg") {
      setOpen(true);
      console.log("I have been clicked!");
    }
  }

  function onLoad(spline) {
    const obj = spline.findObjectByName("door");
    door.current = obj;

    console.log(obj);
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center relative justify-between ${inter.className}`}
    >
      <Spline
        scene="https://prod.spline.design/bUNlFNnP-OCXGLX2/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />

      <section className="flex gap-10 mx-auto max-w-[1440px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex gap-5 flex-col items-center text-center">
          <div className="relative w-[450px] h-[550px]">
            <Spline
              scene="https://prod.spline.design/gQPHYIFpOkM1LM40/scene.splinecode"
              style={{
                width: "450px",
                height: "550px",
              }}
              onMouseDown={onMouseDown}
            />
          </div>
          <h1 className="absolute">{open ? "ja" : "nee"}</h1>
        </div>
        <div className="flex gap-5 flex-col items-center text-center">
          <div className="relative w-[450px] h-[550px]">
            <Spline
              style={{
                width: "450px",
                height: "550px",
              }}
              onLoad={onLoad}
              onMouseDown={onMouseDown}
              scene="https://prod.spline.design/gQPHYIFpOkM1LM40/scene.splinecode"
            />
          </div>
        </div>
        <div className="flex gap-5 flex-col items-center text-center">
          <div className="relative w-[450px] h-[550px]">
            <Spline
              style={{
                width: "450px",
                height: "550px",
              }}
              onLoad={onLoad}
              onMouseDown={onMouseDown}
              scene="https://prod.spline.design/gQPHYIFpOkM1LM40/scene.splinecode"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
