import Layout from "@/components/layout";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import PopUpAnimation from "@/components/PopUp";
import Loading from "@/components/Loading";

export default function Julian() {
  const Introduction = {
    title: "Julian’s world",
    paragraph:
      "Help! Er is een zombie-uitbraak in de King Arena! Baan je een weg door de zombies en zoek snel een schuilplaats!",
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Introduction);

  const bord1 = {
    title: "Bord 1:",
    paragraph:
      "Ik ben enorm fan van horror over het algemeen, maar The Walking Dead is zonder twijfel mijn favoriete TV-serie!",
  };

  const bord2 = {
    title: "Bord 2:",
    paragraph:
      "Zoals je ziet staat het getal “371” op het scorebord. Dit is natuurlijk niet zomaar, want als enorm grote voetbalfan zit ik inmiddels op dit aantal voetbalwedstrijden. Of het nou bij mijn favoriete club Feyenoord is of in Duitsland, ik hoop in elk voetbalstadion te zijn geweest!",
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
