import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import PopUpAnimation from "@/components/PopUp";

export default function Bo() {
  const Introduction = {
    title: "Welcome to my world",
    paragraph: "This world is movable and clickable ",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);

  const bird1 = {
    title: "Arcade machine",
    paragraph: "Here you can see, my favorite game overwatch",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 3500);
  }, []);

  function onMouseDown(e) {
    if (e.target.name === "sign1") {
      setData(bird1);
      setIsOpen(true);
    }

    if (e.target.name === "sign2") {
      setData(bird1);
      setIsOpen(true);
    }
  }

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-screen">
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/ifBxngKfoiO6-PMj/scene.splinecode"
          style={{ width: "100%", height: "100vh" }}
          onMouseDown={onMouseDown}
        />
        {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      </main>
    </Layout>
  );
}
