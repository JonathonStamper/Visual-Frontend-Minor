import Layout from "@/components/layout";
import Spline from "@splinetool/react-spline";
import { useRef, useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Julian() {
  const [isLoading, setIsLoading] = useState(true);
  const julianWorld = useRef();
  function onLoad(spline) {
    const obj = spline.findObjectByName("Front");
    julianWorld.current = obj;

    console.log(obj);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/aOOFORR6a2WcDOhk/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
