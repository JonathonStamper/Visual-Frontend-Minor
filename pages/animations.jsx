import PopUpAnimation from "@/components/PopUp";
import React, { Suspense, useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";

export default function Animations() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const world = useRef();

  const onLoad = (spline) => {
    const obj = spline.findObjectById("0e81df3a-2f34-4d2e-b75e-be2f80664c41");
    world.current = obj;
    console.log(world);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  const footbalEasterEgg = {
    title: "Hello world",
    paragraph: "Lorum ipsum ipsum lorem looooore",
  };

  const Indicator = {
    title: "Hello world",
    paragraph: "I like turtles",
  };

  function onMouseDown(e) {
    if (e.target.name === "TestObject") {
      setData(footbalEasterEgg);
      setIsOpen(true);
    }

    if (e.target.name === "Indicator") {
      setData(Indicator);
      setIsOpen(true);
    }
  }

  return (
    <main className="flex items-center justify-center w-full h-screen ">
      {isLoading && <Loading />}
      {/* <Suspense fallback={ }> */}

      <Spline
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        style={{}}
        scene="https://prod.spline.design/3RPkFAn6qBQn67Dv/scene.splinecode"
      />

      {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      {/* </Suspense> */}
    </main>
  );
}
