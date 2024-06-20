import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Bo() {
  const [isLoading, setIsLoading] = useState(true);
  // const joeyWorld = useRef();
  // function onLoad(spline) {
  //   const obj = spline.findObjectByName("world");
  //   joeyWorld.current = obj;
  // }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/ifBxngKfoiO6-PMj/scene.splinecode"
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
