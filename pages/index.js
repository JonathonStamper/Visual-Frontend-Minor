import Image from "next/image";
import { Inter } from "next/font/google";
import Earth from "@/components/Earth";
// import {Example} from '/Example_Image.jpg'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className="text-8xl font-bold">Hello world</h1>
      <Image
        alt="Example images"
        src="/Example_Image.jpg"
        className="w-screen h-screen absolute -z-10"
        width={300}
        height={300}
      />
      <Earth />
    </main>
  );
}
