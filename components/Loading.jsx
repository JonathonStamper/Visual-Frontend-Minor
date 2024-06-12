import React from "react";
import Joey from "../public/Joey_pic-removebg-preview.png";
import Bo from "../public/Bo_pic-removebg-preview.png";
import Jullian from "../public/Jullian_pic-removebg-preview.png";
import Jonathon from "../public/Jonathon_pic-removebg-preview.png";
import Image from "next/image";

export default function Loading() {
  const ImageList = [
    {
      Image: Joey,
      Alt: "Joey model",
    },
    {
      Image: Jonathon,
      Alt: "Jonathon model",
    },
    {
      Image: Jullian,
      Alt: "Jullian model",
    },
    {
      Image: Bo,
      Alt: "Bo model",
    },
  ];

  return (
    <section className="bg-theme-Black absolute left-0 top-0 h-screen w-full flex items-center justify-center">
      <div className="font-bold text-5xl text-white flex gap-5">
        Loading
        <div className=" flex gap-5 CharacterAnimation">
          {ImageList.map((image, index) => (
            <div style={{ "--c": index }} className="w-[50px]" key={index}>
              <Image alt={image.Alt} src={image.Image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
