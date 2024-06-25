import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import PopUpAnimation from "@/components/PopUp";

export default function JulianHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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
    if (e.target.name === "Leerdoel1") {
      setData(bird1);
      setIsOpen(true);
    }

    if (e.target.name === "Leerdoel2") {
      setData(bird1);
      setIsOpen(true);
    }

    if (e.target.name === "Leerdoel3") {
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
            scene="https://prod.spline.design/Fkh-ipD-WSElhQyz/scene.splinecode"
            onMouseDown={onMouseDown}
            style={{ width: "100%", height: "100vh" }}
          />
          {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
