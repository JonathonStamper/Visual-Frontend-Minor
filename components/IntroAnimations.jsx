import React from 'react'
import Joey from "../public/Joey_pic-removebg-preview.png";
import Bo from "../public/Bo_pic-removebg-preview.png";
import Jullian from "../public/Jullian_pic-removebg-preview.png";
import Jonathon from "../public/Jonathon_pic-removebg-preview.png";
import Portal from "../public/Portal2.png"
import Image from "next/image";

export default function IntroAnimations() {
  return (
    <div className="bg-theme-Black wholeScene text-white absolute  h-screen z-20 w-full flex flex-col justify-center items-center pt-16 pb-16 px-16  overflow-hidden">
      <div className='flex flex-col justify-center items-center pt-16 pb-16 px-16 xl:max-w-[1280px]'>
      <div className='SunGlow w-[50%] h-[500px] absolute bottom-[-350px] -z-20 rounded-full'></div>
      <div className='whiteOut h-screen w-full absolute z-20 bg-[#896b84] blur-2xl opacity-90 rounded-full'></div>

      <div className='flex justify-center items-center w-[200px] rotate-[-30deg] left fadeIn'>
        <Image className='absolute w-[150px] joey left-[-400px] bottom-[200px]  ' src={Joey} alt=''/>
      </div>

      <div className='flex justify-center items-center w-[250px] rotate-[-250deg] fadeIn'>
        <Image className='absolute w-[150px] john bottom-[300px] right-[300px] ' src={Jonathon} alt=''/>
      </div>

      <div className='flex justify-center items-center w-[150px] rotate-[-160deg] fadeIn'>
        <Image className='absolute w-[150px] joey right-[400px] ' src={Jullian} alt=''/>
      </div>

      <div className='flex justify-center items-center w-[100px] rotate-[-80deg] fadeIn'>
        <Image className='absolute w-[150px] john right-[250px] bottom-[200px] ' src={Bo} alt=''/>
      </div>


      <div className='relative'>
      <div  className='popAnimation absolute rounded-full w-[50px] h-[50px] right-[-25px] bottom-[-15px] bg-[#e9a6ff]'></div>
      </div>


      {/* <div className='absolute ActualPortal'>

      <div className='blur-xl relative rounded-full w-[550px] h-[550px] bg-[#fec6ff] flex items-center justify-center'>
      <div className='w-[490px] absolute  rounded-full h-[490px] bg-[#300f32]'>
        
        </div>
      </div>
      
      </div> */}

      <div className='absolute swirl '>
      <div className='portal text-[60px] tracking-widest relative top-[-80px] font-normal'>
        <div className=''><span className='portal1 lg:left-[-140px] xl:left-[-110px]'>Por</span></div>
        <div className=''><span className='portal2 lg:right-[-155px] xl:right-[-110px]'>tal</span></div>
      </div>
      <div className='horizon text-[52px] tracking-widest font-bold relative bottom-[5px]'>
      <div className=''><span className='absolute horizon1 left-[-120px]'>Ho</span></div>
      <div className=''><span className='absolute horizon2 left-[-33px]'>ri</span></div>
      <div className=''><span className='absolute horizon3 left-[18px]'>zon</span></div>

      </div>
      </div>
      {/* <div className='absolute w-[150px]'>
        <Image src={Joey} alt=''/>
      </div>

      <div className='absolute w-[50px]'>
        <Image src={Bo} alt=''/>
      </div>

      <div className='absolute w-[150px]'>
        <Image src={Jonathon} alt=''/>
      </div>

      <div className='absolute w-[250px]'>
        <Image src={Jullian} alt=''/>
      </div> */}
    </div> 
    </div>
  )
}

const John = () => { }