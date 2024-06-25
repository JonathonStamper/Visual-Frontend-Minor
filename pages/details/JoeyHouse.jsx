import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Portfolio from "@/components/Portfolio";

export default function JoeyHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  const leerdoel1 = {
    title: "Leerdoel: Het masteren en verdiepen in Figma",
    content: (
      <div className="flex flex-col gap-10 ">
        <div>
          <h2 className="text-4xl ">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 heb ik mij verdiept in Figma door geavanceerde technieken
            te leren. Ik heb hiervoor gekozen omdat ik sneller websites wil
            leren maken. In dit blok wilde ik graag leren over speciale tools
            als auto lay-out, variabelen en componenten. Uiteindelijk hoopte ik
            een nieuw dashboard voor marineschepen te ontwerpen voor het bedrijf
            van mijn vader (Radio Holland), aangezien deze nog niet goed werkte.
          </div>
        </div>

        <div>
          <h2 className="text-4xl">De vaart naar mijn eindproduct!</h2>
          <div className="text-lg">
            Om tot het mooiste eindresultaat te komen, besloot ik met wat
            onderzoek. Ik liet me inspireren door de Apple Vision UI, maar ik
            wilde het natuurlijk niet zo overnemen. Ik heb dus een masterclass
            bekeken waarin alles over de geavanceerde tools werd uitgelegd. Met
            de hulp hiervan merkte ik dat het design proces een stuk sneller en
            efficiënter ging. Zie hieronder het resultaat!
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Mijn resultaat</h2>

          <img src="/media/blok1_joey.png" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel3 = {
    title: "Leerdoel: Het leren van web animaties en Prismic:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            Waar ik in blok 1 ging voor design, koos ik nu voor een bekender
            gebied: development. Als web developer ben ik al ervaren, maar het
            kan altijd beter! Typescript wordt veel gebruikt bij grote bedrijven
            en trekt me daarom aan. Verder wil ik Next.js leren omdat er elke
            drie maanden een nieuwe versie van komt. Ook vind ik het erg
            interessant, dus dit was voor mij dé kans om Typescript en Next.js
            te kunnen combineren. Als deliverable ben ik voor een website over
            films en series gegaan. Door Next.js hoopte ik deze website een hoop
            functies te geven!
          </div>
        </div>
        <div>
          <h2 className="text-4xl my-3">Het combineren van twee leerdoelen!</h2>
          <div className="text-lg">
            Ik heb mijn leerdoel gehaald op twee manieren: Ik heb tutorials
            bekeken op YouTube, maar ook de documentatie van Typescript. De
            tutorials zijn vaak wat oppervlakkig en in de documentatie wordt er
            wat verder op in gegaan. Om tot mijn eindproduct te komen, heb ik
            veel geëxperimenteerd in de code editor. Door zelf te proberen, merk
            ik dat het proces sneller ging en ik veel leerde. Benieuwd naar mijn
            eindproduct? Zie hieronder het resultaat!
          </div>
        </div>

        <div>
          <h2 className="text-4xl my-3">Mijn resultaat</h2>

          <img src="/media/blok2_joey.png" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel2 = {
    title: "Leerdoel: Het leren van Typescript en Next.js:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            Ook in dit blok koos ik voor twee leerdoelen: Web animaties en
            Prismic, een database voor het bouwen van de backend. Mijn doel was
            om mijn filmwebsite uit blok 2 verder uit te bouwen. In mijn
            deliverable wilde ik een introanimatie maken, waar ik gebruik wilde
            maken van scrollen. Daarnaast wilde ik een nieuwe, veiligere
            inlogmethode (doormiddel van een passkey) implementeren.
          </div>
        </div>

        <h2 className="text-4xl my-3">Tijd voor actie!</h2>
        <div className="text-lg">
          Om dit leerdoel te halen, heb ik een cursus voor framer-motion
          gevolgd. Dankzij deze cursus heb ik een mooie intro animatie
          ontwikkeld. Ook heb ik de documentatie doorgelezen, waardoor ik toch
          nog wat dieper op de leerdoelen in ging. Uiteindelijk heb ik ook de
          nieuwe manier van inloggen in de website gezet, waardoor deze nu een
          stuk veiliger en professioneler is geworden! Zie hieronder het
          eindresultaat!
        </div>

        <h2 className="text-4xl my-3">Mijn resultaat</h2>

        <img src="/media/blok2_joey.png" alt="Leerdoel image" />
      </div>
    ),
  };

  function onMouseDown(e) {
    if (e.target.name === "leerdoel1") {
      setData(leerdoel1);
      setIsOpen(true);
    }

    if (e.target.name === "leerdoel2") {
      setData(leerdoel2);
      setIsOpen(true);
    }

    if (e.target.name === "leerdoel3") {
      setData(leerdoel3);
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
          {isOpen && <Portfolio data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
