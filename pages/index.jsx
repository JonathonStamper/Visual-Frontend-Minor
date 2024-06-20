import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";
import IntroAnimations from "@/components/IntroAnimations";

export default function Home() {
  const characters = useRef();

  /*Loads character data*/
  function onLoad(spline) {
    const obj = spline.findObjectByName("Doors");
    characters.current = obj;
  }

  return (
    <>
        <IntroAnimations/>

    <section className="flex h-screen layout">

      <div className="bg-theme-Black text-white  h-full layout w-full flex flex-col justify-between pt-16 pb-16 px-16 relative  bg-[url('/media/gradient.png')] bg-no-repeat bg-[top_10rem_left_10rem]">
        <Link href="/" className="font-bold">
          Portal Horizon.
        </Link>
        <h1 className="text-7xl max-w-[649px]">
          Welcome to our
          <span className="ml-5 text-theme-Purple">Working space</span>
        </h1>
        <p>Made By: Joey, Julian, Bo, Jonathan</p>
      </div>
      <div className="bg-[url('/media/space.jpg')] w-full h-full bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
        <div className="relative">
          <Spline
            scene="https://prod.spline.design/eoDfixn1U745RWEh/scene.splinecode"
            style={{ width: "650px", height: "600px" }}
            onLoad={onLoad}
            />
        </div>
        <Link href="/lobby">
          <button className="bg-theme-Purple text-white text-2xl font-bold p-7 rounded-lg">
            Explore Our Worlds
          </button>
        </Link>
      </div>
    </section>
            </>
  );
}
