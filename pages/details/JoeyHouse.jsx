import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import PopUpAnimation from "@/components/PopUp";

export default function JoeyHouse() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  const bird1 = {
    title: "Arcade machine",
    paragraph: "Here you can see, my favorite game overwatch",
  };

  function onMouseDown(e) {
    if (e.target.name === "leerdoel1") {
      setData(bird1);
      setIsOpen(true);
    }
    if (e.target.name === "leerdoel2") {
      setData(bird1);
      setIsOpen(true);
    }
    if (e.target.name === "leerdoel3") {
      setData(bird1);
      setIsOpen(true);
    }
  }

  return (
    <>
      <Layout>
        <main className="flex items-center justify-center w-full h-screen">
          {isLoading && <Loading />}
          <Spline
            scene="https://prod.spline.design/Llo35VmZ3SOr2gLC/scene.splinecode"
            style={{ width: "100%", height: "100vh" }}
            onMouseDown={onMouseDown}
          />
          {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
