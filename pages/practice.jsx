import Image from "next/image";
import { Inter } from "next/font/google";
import IntroAnimations from "../components/IntroAnimations";
import Portfolio from "@/components/Portfolio";
import { use, useEffect, useState } from "react";
// import {Example} from '/Example_Image.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(true)
  const [data, setData] = useState({})  
  const loaderList = [
    { color: "#C6A664", number: 1 },
    { color: "#909090", number: 2 },
    { color: "#20603D", number: 3 },
    { color: "#49678D", number: 4 },
  ];

  const example = {
    title: 'Portfolio 1',
    content: <div>
      <h1 className="text-[34px]">hello world</h1>
    </div>
  }

  useEffect(()=>{
    setData(example)
  }, [])

  return (
    <>
      <IntroAnimations/>
      
        <main
      className={`flex text-white h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    > <h1 className="animate animation--infite animation--slow slideInLeft text-8xl font-bold">
        Hello world
      </h1>
      <h1 className="animate animation--infite Rotate animation--slow">
        Roation
      </h1>

      <div className=" flex gap-5 items-center">
        Loading Animation 1
        <div className="loader flex gap-5">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              style={{ "--i": item.number, "--c": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className=" flex gap-5 justify-center items-center relative">
        Loading Animation 2
        <div className="loader2 flex gap-5 ite ">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              style={{ "--i2": item.number, "--c2": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className=" flex gap-5 justify-center items-center relative">
        Loading Animation 3
        <div className="loader3 flex gap-5 ite ">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              style={{ "--i3": item.number, "--c3": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className=" flex gap-5 justify-center items-center relative">
        Loading Animation 4
        <div className="loader4 flex gap-2 ite ">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              style={{ "--i4": item.number, "--c4": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className=" flex gap-5 justify-center items-center relative">
        Loading Animation 5
        <div className="loader5 flex gap-2 ite ">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              className={"planet" + item.number}
              style={{ "--i5": item.number, "--c5": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className=" flex gap-5 justify-center items-center relative">
        Loading Animation 6
        <div className="loader6 flex gap-2 ite ">
          {loaderList.map((item, index) => (
            <span
              key={item.number}
              className={"planet" + item.number}
              style={{ "--i6": item.number, "--c6": item.color }}
            ></span>
          ))}
        </div>
      </div>

      <div className="glassMorphism">hello worlds</div>

      {/* <Image
        alt="Example images"
        src="/Example_Image.jpg"
        className="w-screen h-screen absolute -z-10"
        width={300}
        height={300}
      /> */}


      <button className="buttonTest" onClick={() => setIsOpen(true)}>Button Transition</button> 
      {isOpen && <Portfolio setIsOpen={setIsOpen} data={data}/>}
      </main>
      
     
    </>
    
  );
}
  