import { useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import Loading from "@/components/Loading";
import PopUpAnimation from "@/components/PopUp";

export default function Home() {
  const Introduction = {
    title: "Introductie",
    paragraph: `Welkom bij onze website: Portal Horizon! In deze website ontdek je naast ons portfolio óok onze eigen werelden! Wanneer je op een portal klikt, begin je in de droomwereld van de persoon die hierachter zit. Vind hier de easter eggs en leer weer wat meer over de persoon! Na een kleine challenge, vind je de mario-buis die leidt naar de working space van de persoon. Hier vind je de verschillende portfolio items, waar je van alles over onze eerste drie blokken kan lezen!
    Klik op een portal om verder te gaan!`,
  };

  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);
  const [isLoading, setIsLoading] = useState(true);
  const door = useRef();

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
          scene="https://prod.spline.design/pnfpgi4e72t5FpEk/scene.splinecode"
          style={{ width: "100%", height: "100vh" }}
        />
        {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      </main>
    </Layout>
  );
}
