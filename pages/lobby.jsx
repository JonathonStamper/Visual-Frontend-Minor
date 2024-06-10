import { Inter } from "next/font/google";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const door = useRef();

  function onMouseDown(e) {
    if (e.target.name === "Front") {
      console.log("I have been clicked!");
    }
  }

  function onLoad(spline) {
    const obj = spline.findObjectByName("Portals");
    door.current = obj;

    console.log(obj);
  }

  return (
    <Layout data={door}>
      <Spline
        scene="https://prod.spline.design/bUNlFNnP-OCXGLX2/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
