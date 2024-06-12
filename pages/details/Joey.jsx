import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useRef, useEffect, useState } from "react";
import Loading from "@/components/Loading";

export default function Joey() {
  const [isLoading, setIsLoading] = useState(true);
  const joeyWorld = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("world");
    joeyWorld.current = obj;

    console.log(obj);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Layout data={joeyWorld}>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/MhDTjrqFFUi3B0wH/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
