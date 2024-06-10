import Layout from "@/components/layout";
import Spline from "@splinetool/react-spline";
import { useRef } from "react";

export default function Julian() {
  const julianWorld = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("Front");
    julianWorld.current = obj;

    console.log(obj);
  }

  return (
    <Layout>
      <Spline
        scene="https://prod.spline.design/aOOFORR6a2WcDOhk/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
