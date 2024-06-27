import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Portfolio from "@/components/Portfolio";

export default function BoHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);
  const leerdoel1 = {
    title: "Leerdoel: Het leren coderen met Javascript:",
    content: (
      <div className="flex flex-col gap-10 ">
        <div>
          <h2 className="text-4xl ">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            Voor dit blok heb ik als leerdoel gekozen om Javascript te leren. Ik
            werk als designer, maar ik vind coderen ook erg leuk! Ik zou later
            dan ook graag React en Next.js wil leren en Javascript is de basis
            deze frameworks. Het zou me dus enorm helpen om meer kennis te
            krijgen en meer technieken te leren. Mijn uiteindelijke deliverable
            is een weather app. Deze app zou ik coderen met de hulp van een API.
            Het gaat dus echt diep op de stof in!
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Zo codeerde ik me naar mijn eindproduct!</h2>
          <div className="text-lg">
            Dit blok bestond uit twee onderdelen: Een cursus op CodeCademy en
            het coderen zelf. Door de cursus kon ik stap voor stap de codetaal
            onder de knie krijgen. Na deze cursus begon ik aan mijn deliverable:
            De Weather app. Het coderen van deze app was de perfecte manier om
            mijn theorie in de praktijk toe te passen. Ik leerde over de basis
            én over hoe ik API’s kon gebruiken om gegevens dynamisch te maken.
            Dit blok heeft mij erg veel technische kennis gegeven. Zie hieronder
            het eindresultaat!
          </div>
        </div>
        {/* 
        <div>
          <h2 className="text-4xl">Mijn resultaat</h2>

          <img src="/media/blok1_joey.png" alt="Leerdoel image" />
        </div> */}
      </div>
    ),
  };

  const leerdoel3 = {
    title: "Leerdoel: Het leren ontwerpen van een design system:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 heb ik gekozen voor het leren ontwerpen van een design
            system. Zelf werk ik bij een agency als designer dus ik had al de
            nodige kennis. Toch is er ruimte voor verbetering, dus ik besloot
            dat ik me op dit gebied nog wat wilde ontwikkelen! Het ontwerpen van
            een design system is erg belangrijk voor het creëren van consistente
            en efficiënte gebruikerservaringen, dus ik wilde me hier verder in
            verdiepen! Als deliverable ben ik voor een design system voor Airbnb
            gegaan. Ik heb hiervoor gekozen omdat dit veel bouwstenen bevatte
            voor het design system. Het was dus het perfecte voorbeeld om
            hiervoor te gebruiken!
          </div>
        </div>
        <div>
          <h2 className="text-4xl my-3">
            Hoe ik mijn design kennis nog meer uitbreidde
          </h2>
          <div className="text-lg">
            Om mijn leerdoel te halen, heb ik veel methoden gebruikt. Één van de
            belangrijkste bronnen binnen dit proces was YouTube. Ik heb veel
            video’s bekeken die uitleg gaven over hoe ik het ontwerpen van een
            design system het beste aan kon pakken. Voor het praktische gedeelte
            van mijn leerproces heb ik Figma gebruikt. Binnen Figma heb ik
            gewerkt aan onder andere kleuren, typografie, componenten en de
            bijbehorende tokens en variabelen. Deze manier van werken zorgde
            ervoor dat ik mijn geleerde theorie goed toe heb kunnen passen. Zie
            hieronder het eindresultaat!
          </div>
        </div>

        {/* <div>
          <h2 className="text-4xl my-3">Mijn resultaat</h2>

          <img src="/media/blok2_joey.png" alt="Leerdoel image" />
        </div> */}
      </div>
    ),
  };

  const leerdoel2 = {
    title: "Leerdoel: Het leren van Blender:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 3 ben ik afgestapt van design en development. Ik heb
            namelijk gekozen voor het leren van Blender! Ik ben altijd al
            gefascineerd geweest door visuele effecten en 3D-kunst. Nu krijg ik
            de kans om mijn kennis te verbeteren, dus deze kans grijp ik nu! Op
            deze manier hoop ik dan ik mijn creativiteit op dit gebied nog meer
            kan verkennen en ontwikkelen. Omdat ik meerdere aspecten wil leren
            (modellering, texturering, belichting en renderen), besloot ik als
            deliverable die al deze aspecten bevat. Mijn uiteindelijke
            deliverable wordt een 3D-isometrisch gebouw in cyberpunk-stijl, dus
            met neon-vibes!
          </div>
        </div>

        <h2 className="text-4xl my-3">Het modelleren van mijn deliverable</h2>
        <div className="text-lg">
          Ik heb gedurende mijn proces een sterke aanpak gevolgd. Ik begon met
          tutorials om de basiskennis van Blender te krijgen. Met de hulp
          hiervan, leerde ik over de interface en de sneltoetsen, wat mijn
          efficiëntie in het vervolg enorm heeft verbeterd! Tijdens het creëren
          van mijn deliverable, heb ik hier erg veel aan gehad. Ik begon met het
          modelleren van het gebouw, waarin ik de kennis uit de tutorials goed
          gebruikt heb. In de laatste week heb ik mij geconcentreerd op de
          belichting en texturering, waardoor ik de scene tot leven heb gebracht
          tot het volgende resultaat!
        </div>

        {/* <h2 className="text-4xl my-3">Mijn resultaat</h2>

        <img src="/media/blok2_joey.png" alt="Leerdoel image" /> */}
      </div>
    ),
  };

  function onMouseDown(e) {
    if (e.target.name === "book_big") {
      setData(leerdoel1);
      setIsOpen(true);
    }

    if (e.target.name === "Blender") {
      setData(leerdoel2);
      setIsOpen(true);
    }

    if (e.target.name === "Designing") {
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
            scene="https://prod.spline.design/EFfS33KJAWAWQrDp/scene.splinecode"
            style={{ width: "100%", height: "100vh" }}
            onMouseDown={onMouseDown}
          />
          {isOpen && <Portfolio data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
