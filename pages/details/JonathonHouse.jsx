import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import Portfolio from "@/components/Portfolio";
import Image from "next/image";
import Link from "next/link";

export default function JonathanHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  const leerdoel1 = {
    title: "Leerdoel: meester worden in Blender:",
    content: (
      <div className="flex flex-col gap-10 ">
        <div>
          <h2 className="text-4xl ">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In blok 1 heb ik geleerd om in Blender te werken. Ik wilde binnen
            deze minor mijn portfolio gaan ontwerpen en ontwikkelen en ik koos
            voor een uniek 3D model van mezelf. Dit model plaats ik in mijn
            header voor een origineel element in mijn portfolio. Naast het
            ontwerpen, wilde ik ook leren animeren. Hierdoor leer ik de basis
            van blender en beheers ik al veel!
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Mijn Blender proces:</h2>
          <div className="text-lg">
            Ik begon met het maken van verschillende objecten als een oefening,
            zoals donuts. Ik begon makkelijk, waardoor ik mezelf steeds meer
            uitdaagde. Toen ik Blender goed begreep, begon ik aan mijn
            deliverable. Ik heb meerdere variaties van mijn character gemaakt en
            de beste geanimeerd. Zie hieronder het resultaat van dit leerdoel!
          </div>
        </div>

        <div>
          <h2 className="text-4xl">Mijn resultaat</h2>
          <img src="/media/jonathan_blender.jpeg" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel2 = {
    title: "Leerdoel: Het leren van designen in Figma:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            In dit blok heb ik besloten om Figma te leren. Ik wilde graag een
            portfolio website maken, maar ik had nog geen design. Omdat dit erg
            handig is voor het vinden van een stage, besloot ik dit te kiezen
            als mijn tweede leerdoel. Ik had hier nooit in ontworpen, dus ik
            wilde de basis van het programma leren om een mooie Hi-fi prototype
            van mijn portfolio over te houden!{" "}
          </div>
        </div>
        <div>
          <h2 className="text-4xl my-3">De weg naar mijn portfolio:</h2>
          <div className="text-lg">
            Tijdens mijn proces begon ik met het kijken van een paar tutorials.
            Hierna maakte ik meerdere versies van mijn portfolio met steeds een
            andere techniek. Dit gaat bijvoorbeeld over auto lay-out of over
            varianten. Uiteindelijk koos ik de beste uit door rond te vragen aan
            medestudenten. Op deze manier ben ik op het mooiste resultaat
            gekomen. Zie deze hieronder!{" "}
          </div>
        </div>

        <div>
          <h2 className="text-4xl my-3">Mijn resultaat</h2>
          <img src="/media/figma.jpeg" alt="Leerdoel image" />
        </div>
      </div>
    ),
  };

  const leerdoel3 = {
    title:
      "Leerdoel: Een nieuw CMS-systeem implementeren in een ThreeJS website:",
    content: (
      <div className="flex flex-col gap-5">
        <div>
          <h2 className="text-4xl my-3">
            Waarom dit leerdoel en wat wil ik maken?
          </h2>
          <div className="text-lg">
            Ik heb ervoor gekozen om mijn ontwerp uit blok 2 om te zetten naar
            een website. Ik besloot om dit in ThreeJS te doen omdat dit
            framework nieuw voor me was. Ook koos ik ervoor om een CMS systeem
            te leren. Hiermee kan ik dan mijn 3D model uit blok 1 in mijn
            website zetten. Dit blok heeft dus eigenlijk twee leerdoelen! Mijn
            deliverable is dus mijn gecodeerde portfolio website met mijn 3D
            model.{" "}
          </div>
        </div>
        <h2 className="text-4xl my-3">
          De laatste stappen van mijn portfolio!
        </h2>
        <div className="text-lg">
          Nadat ik onderzoek had gedaan naar de CMS systemen, besloot ik voor
          Hygraph te gaan. Ik volgde eerst wat tutorials van ThreeJS en Hygraph.
          Met de hulp van deze tutorials, heb ik mijn website best makkelijk
          kunnen ontwikkelen en heb ik mijn 3D model geïmplamenteerd.
          Uiteindelijk heb ik een mooie website neergezet. Zie hieronder het
          resultaat!{" "}
        </div>
        <h2 className="text-4xl my-3">Mijn resultaat:</h2>
        <img src="/media/website.jpeg" alt="Leerdoel image" />
        <Link
          href="https://john-the-programmer.netlify.app/"
          className="cursor-pointer font-semibold underline underline-offset-4"
          target="_blank"
        >
          {" "}
          Echte site
        </Link>
      </div>
    ),
  };

  function onMouseDown(e) {
    if (e.target.name === "Blender") {
      setData(leerdoel1);
      setIsOpen(true);
    }

    if (e.target.name === "Figma") {
      setData(leerdoel2);
      setIsOpen(true);
    }

    if (e.target.name === "ThreeJS") {
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
            scene="https://prod.spline.design/p7uBVzzJUCKTNPoC/scene.splinecode"
            onMouseDown={onMouseDown}
            style={{ width: "100%", height: "100vh" }}
          />
          {isOpen && <Portfolio data={data} setIsOpen={setIsOpen} />}
        </main>
      </Layout>
    </>
  );
}
