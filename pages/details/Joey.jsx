import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import PopUpAnimation from "@/components/PopUp";

import Loading from "@/components/Loading";

export default function Joey() {
  const Introduction = {
    title: "Joeys’s world",
    paragraph:
      "Welkom in mijn Nintendo Arena! In deze wereld ontdek je mijn passies! Verzamel de munten en ontdek van alles over mij door op de borden te klikken!",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);

  const bord1 = {
    title: "Bord 1:",
    paragraph:
      "Dit is een arcade machine. Als je goed kijkt, zie je op het scherm mijn favoriete spel: Overwatch. Dit spel speel ik al drie jaar en ik ben nog zeker niet uitgespeeld",
  };

  const bord2 = {
    title: "Bord 2:",
    paragraph:
      "Zoals je ziet, liggen er hier sportspullen. Ik ben namelijk veel in de sportschool te vinden! Ik ga zo’n 2 keer per week naar de sportschool en daarnaast loop ik regelmatig hard. ",
  };

  const bord3 = {
    title: "Bord 3:",
    paragraph:
      "Dit is mijn laptop. Buiten dat ik werk als web developer, houd ik mij in mijn vrije tijd ook bezig met het experimenteren met mijn code.",
  };

  const bord4 = {
    title: "Bord 4:",
    paragraph:
      "Een andere passie die ik heb, is voetbal. Mijn favoriete voetbalclub is Borussia Dortmund. Dit is een club in Duitsland en ik ga er ongeveer 3 keer per jaar naartoe.",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 2500);
  }, []);

  function onMouseDown(e) {
    if (e.target.name === "sign1") {
      setData(bord1);
      setIsOpen(true);
    }

    if (e.target.name === "sign2") {
      setData(bord2);
      setIsOpen(true);
    }

    if (e.target.name === "sign3") {
      setData(bord3);
      setIsOpen(true);
    }

    if (e.target.name === "sign4") {
      setData(bord4);
      setIsOpen(true);
    }
  }

  return (
    <Layout>
      <main className="flex items-center justify-center w-full h-screen">
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/5hcWLmfEBYVljPll/scene.splinecode"
          style={{ width: "100%", height: "100vh" }}
          onMouseDown={onMouseDown}
        />
        {isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}
      </main>
    </Layout>
  );
}
