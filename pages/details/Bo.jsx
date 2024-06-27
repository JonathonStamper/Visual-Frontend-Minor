import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";
import PopUpAnimation from "@/components/PopUp";
import { useRouter } from "next/router";

export default function Bo() {
  const router = useRouter();
  const Introduction = {
    title: "Bo’s world",
    paragraph:
      "Welkom in mijn concertzaal! Ik ben groot fan van muziek, vooral van twee artiesten. Kan jij raden welke? Klik de twee goede artiesten aan en je vindt de gang naar mijn working space!",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);

  const sign1 = {
    title: "Drumstel:",
    paragraph: `Op het podium zie je een drumstel. Ik speel veel verschillende instrumenten, maar drummen vind ik veruit het leukste om te doen!,`,
  };

  const sign2 = {
    title: "Hockeystick:",
    paragraph:
      "Hier zie je een hockeystick. Ik vind hockey namelijk de leukste sport om te doen! Ik heb in het verleden een paar jaar lang gehockeyd bij HDM, waar ik in hoge teams heb mogen spelen",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 2500);
  }, []);

  function onMouseDown(e) {
    if (e.target.name === "sign1") {
      setData(sign1);
      setIsOpen(true);
    }

    if (e.target.name === "sign2") {
      setData(sign2);
      setIsOpen(true);
    }

    if (e.target.name === "sign3") {
      router.push("/details/BoHouse");
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
