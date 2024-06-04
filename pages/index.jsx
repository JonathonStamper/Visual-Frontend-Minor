import Image from "next/image";
import { Inter } from "next/font/google";
// import {Example} from '/Example_Image.jpg'
import Room from "@/components/Room";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Our Rooms</h1>
      <section className="flex">
        <div className="flex gap-10">
          <div>
            <Room />
          </div>
        </div>
      </section>
    </main>
  );
}
