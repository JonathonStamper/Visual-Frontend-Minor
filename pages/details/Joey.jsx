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
    title: "Bord1",
    paragraph:
      "Ik ben enorm fan van horror over het algemeen, maar The Walking Dead is zonder twijfel mijn favoriete TV-serie!",
  };

  const bord2 = {
    title: "Bord2",
    paragraph:
      "Zoals je ziet staat het getal “371” op het scorebord. Dit is natuurlijk niet zomaar, want als enorm grote voetbalfan zit ik inmiddels op dit aantal voetbalwedstrijden. Of het nou bij mijn favoriete club Feyenoord is of in Duitsland, ik hoop in elk voetbalstadion te zijn geweest!",
  };

  const bord3 = {
    title: "Bord3",
    paragraph:
      "Het kroontje staat voor de naam van het stadion, ofwel de “King Arena”. Ook dit is niet zomaar, want ik ben geboren op koningsdag!",
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 3500);
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

    if (e.target.name === "sign4") {
      setData(bord3);
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
