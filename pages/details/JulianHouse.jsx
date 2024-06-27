import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import PopUpAnimation from "@/components/PopUp";
import Link from "next/link";
import Image from "next/image";
import Portfolio from "@/components/Portfolio";

export default function JulianHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const leerdoel1 = {
    title: "Leerdoel: Het leren van Javascript",
    content: (
      <div className="flex flex-col gap-10 ">
        <div>
          <h2 className="text-4xl ">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 ben ik gegaan voor het leren van JavaScript. Ik heb bij
            mijn stage als web developer gewerkt en JavaScript kwam soms
            voorbij. Ik wist hier niets van, dus ik besloot de basis hiervan te
            leren. Verder is JavaScript de basis voor veel andere codetalen, dus
            het is als web developer zeer essentieel! Als groundhopper ga ik
            veel naar voetbalwedstrijden toe. Ik koop vaak de tickets en weet
            hoe frustrerend dit kan zijn. Daarom besloot ik met{" "}
            <Link href="http://Estad.io" className="text-blue-600">
              Estad.io
            </Link>{" "}
            een website te ontwikkelen die anderen hiermee kan helpen.
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Hoe codeerde ik me naar het eindproduct?</h2>
          <div className="text-lg">
            Ik begon mijn leerproces met de cursus op Codecademy. Hier leerde ik
            de basis van Javascript op een praktische manier. Daarna begon ik
            met coderen en merkte ik dat de cursus me niet alles leerde, zoals
            de link met HTML. Door onderzoek en hulp van medestudenten heb ik
            dit toch geleerd. Ook leerde ik over het aanmaken van een JSON
            bestand en het aanmaken van dynamische pagina’s. Op deze manier heb
            ik een nuttige website neergezet die mij later ook regelmatig heeft
            kunnen helpen! Zie hieronder het eindresultaat!
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Mijn resultaat</h2>

          <img src="/media/blok1.png" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel2 = {
    title: "Leerdoel: Het coderen van een website in het React-framework:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 leerde ik over Javascript en ik vond het leuk om hierin te
            coderen, dus ik besloot er dieper op in te gaan! Een medestudent
            vertelde me dat React leren een goede vervolgstap zou zijn, dus ik
            besloot na wat onderzoek als leerdoel voor het leren van React te
            gaan. Als deliverable ging ik voor een combinatie van mijn passies:
            Schrijven, coderen en voetbal. Ik besloot een blogwebsite te maken,
            die automatisch zou updaten wanneer ik een JSON-bestand aan zou
            passen. Deze website maakte ik in de hoop om deze te blijven
            gebruiken.
          </div>
        </div>
        <div>
          <h2 className="text-4xl my-3">
            Hoe ik mijn website codeerde met een onverwachte wending!
          </h2>
          <div className="text-lg">
            Ik begon mijn leerproces met een cursus op Scrimba, waar ik op een
            praktische manier de basis leerde. Het bleek makkelijker dan gedacht
            en ik leerde ook anders denken bij het coderen. Ik wilde ondertussen
            met een JSON-bestand werken, maar door meerdere omstandigheden moest
            ik dit idee anders aanpakken. Uiteindelijk leerde ik door middel van
            tutorials hoe ik een extern CMS (Hygraph), kon integreren. Het
            kostte me wat moeite, vooral omdat ik nieuwe dingen zoals GraphQL
            moest leren, maar het bleek een goede keuze. Hierdoor is het
            toevoegen van een blog erg gebruikersvriendelijk geworden. Zie
            hieronder het eindresultaat!
          </div>
        </div>

        <div>
          <h2 className="text-4xl my-3">Mijn resultaat</h2>

          <img src="/media/blok2.png" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel3 = {
    title: "Leerdoel: Het leren van de Figma basics:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 en 2 koos ik voor leerdoelen op het gebied van web
            development, waarna ik besloot voor iets anders te gaan: Design!
            Voor mijn afstudeerstage volgend jaar is het belangrijk om Figma te
            leren, want dit wordt tegenwoordig steeds meer gebruikt. Ook moest
            ik mijn research en design skills weer wat bijspijkeren na lang
            gecodeerd te hebben. Dit was voor mij de perfecte gelegenheid om de
            basis van Figma onder de knie te krijgen. Mijn specifieke doel was
            om een website te ontwerpen voor het fictieve bedrijf{" "}
            {'"Deepblue Discoveries"'}, dat zich richt op de oceaan, een
            onderwerp dat ik ook erg leuk vind!
          </div>
        </div>

        <h2 className="text-4xl my-3">Mijn expeditie naar het eindproduct!</h2>
        <div className="text-lg">
          Ik begon het blok met het kijken van een lange tutorial op YouTube,
          waarin de basis van Figma werd uitgelegd. Ik merkte veel
          overeenkomsten op tussen Figma en Adobe XD, wat het al makkelijker
          maakte. Na een lang onderzoek voor de stijl, begon ik te designen. Ik
          heb per pagina drie alternatieven gemaakt, waardoor ik veel kon
          oefenen en uiteindelijk het beste kon kiezen. Zo kwam ik tot het
          mooist mogelijke eindresultaat, dat je hieronder kunt zien!
        </div>

        <h2 className="text-4xl my-3">Mijn resultaat</h2>

        <img src="/media/blok3.png" alt="Leerdoel image" />
      </div>
    ),
  };

  function onMouseDown(e) {
    if (e.target.name === "Leerdoel1") {
      setData(leerdoel1);
      setIsOpen(true);
    }

    if (e.target.name === "Leerdoel2") {
      setData(leerdoel2);
      setIsOpen(true);
    }

    if (e.target.name === "Leerdoel3") {
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
            scene="https://prod.spline.design/Fkh-ipD-WSElhQyz/scene.splinecode"
            onMouseDown={onMouseDown}
            style={{ width: "100%", height: "100vh" }}
          />
          {isOpen && <Portfolio data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
