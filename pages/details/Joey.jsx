import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useRef } from "react";

export default function Joey() {
  const joeyWorld = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("world");
    joeyWorld.current = obj;

    console.log(obj);
  }
  return (
    <Layout data={joeyWorld}>
      <Spline
        scene="https://prod.spline.design/MhDTjrqFFUi3B0wH/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
