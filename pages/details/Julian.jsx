import Layout from "@/components/layout";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import PopUpAnimation from "@/components/PopUp";
import Loading from "@/components/Loading";

export default function Julian() {
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

  const Beginning_Sign = {
    title: "Heres your firsty chanllenge",
    paragraph:
      "Clear this hill and collect the rupees when reaching the top. Goodluck!",
  };

  const Gym_sign = {
    title: "Why is there gym equipment here?",
    paragraph: "Because in my free time I like to go to the gym, that's why :)",
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
      setData(Beginning_Sign);
      setIsOpen(true);
    }

    if (e.target.name === "sign3") {
      setData(Gym_sign);
      setIsOpen(true);
    }
    if (e.target.name === "sign4") {
      setData(Gym_sign);
      setIsOpen(true);
    }
  }

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-screen">
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/m6U7TMSFkypErn6E/scene.splinecode"
          style={{ width: "100%", height: "100vh" }}
          onMouseDown={onMouseDown}
        />
        {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      </main>
    </Layout>
  );
}
