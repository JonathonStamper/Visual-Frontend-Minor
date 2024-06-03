import Image from "next/image";
import { Inter } from "next/font/google";
// import {Example} from '/Example_Image.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const loaderList = [1,2,3,4]

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
     <h1 className="animate animation--infite animation--slow slideInLeft text-8xl font-bold">Hello world</h1>
     <h1 className="animate animation--infite Rotate animation--slow">Roation</h1>
    <div className=" flex gap-5 items-center">
      Loading Animation 1
      <div className="loader flex gap-5">
        {loaderList.map((item, index) => (        
        <span key={item} style={{'--i': index + 1}}></span>
))}
        
      </div>
    </div>

    

     <Image alt='Example images' src='/Example_Image.jpg' className="w-screen h-screen absolute -z-10" width={300} height={300}/>
     <button className="buttonTest">Button Transition</button>
    </main>
  );
}
