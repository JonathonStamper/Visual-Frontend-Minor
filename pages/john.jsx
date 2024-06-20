import React, { useEffect, useState } from 'react'
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import Loading from "@/components/Loading";
import PopUpAnimation from '@/components/PopUp';



export default function John() {   
  
  const Introduction = {
    title: "Welcome to my world",
    paragraph: "Here you get to play as me and roam my island. Some items are clickable, just click and see some easter eggs. PS (WASD to move around)",
  };
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(Introduction);

   
    
      const bird1 = {
        title: "Just a bird....",
        paragraph: "Nothing to see here",
      };

      const Beginning_Sign = {
        title: "Heres your firsty chanllenge",
        paragraph: "Clear this hill and collect the rupees when reaching the top. Goodluck!",
      };

      const Gym_sign = {
        title: "Why is there a gym set?",
        paragraph: "Because my free time I like to go to the gym, that's why :)",
      };

      const Beach_sign = {
        title: "Here lies....",
        paragraph: "the last teacher who gave me a bad grade...",
      };
    

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
          setIsOpen(true)
        }, 1500);
      }, []);



      function onMouseDown(e) {
        if (e.target.name === "BirdP") {
          setData(bird1);
          setIsOpen(true);
        }
    
        if (e.target.name === "Beginning_Sign") {
          setData(Beginning_Sign);
          setIsOpen(true);
        }

        if (e.target.name === "Gym_Sign") {
            setData(Gym_sign);
            setIsOpen(true);
          }

          if (e.target.name === "Beach_sign+") {
            setData(Beach_sign);
            setIsOpen(true);
          }
        
      }
    


  return (
    <main className="flex items-center justify-center w-full h-screen ">

    {isLoading && <Loading />}
    <Spline
        scene="https://prod.spline.design/ASgqRHR1Lvy6hCS9/scene.splinecode" 
        // onLoad={onLoad}
        onMouseDown={onMouseDown}
        style={{ width: "100%", height: "100vh" }}
        />

{isOpen && <PopUpAnimation data={data} setIsOpen={setIsOpen} />}

   
</main>
)
}
