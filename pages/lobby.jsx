import { useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import Loading from "@/components/Loading";
import PopUpAnimation from "@/components/PopUp";

export default function Home() {
  const Introduction = {
    title: "Introduction",
    paragraph: `Welcome to Portal World! Click on each portal to discover our
    personal world and find our learning goals/achievements`,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);
  const [isLoading, setIsLoading] = useState(true);
  const door = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Doors");
    door.current = obj;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 3500);
  }, []);

  return (
    <Layout data={door} backToLobby={false}>
      <main className="flex items-center justify-center w-full h-screen">
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/t8-IY41IMWdxlrWr/scene.splinecode"
          onLoad={onLoad}
          style={{ width: "100%", height: "100vh" }}
        />
        {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      </main>
    </Layout>
  );
}
