import Layout from "@/components/layout";
import Spline from "@splinetool/react-spline";
import { useState, useEffect } from "react";
import Loading from "@/components/Loading";

export default function Julian() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <Layout>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/m6U7TMSFkypErn6E/scene.splinecode"
        style={{ width: "100%", height: "100vh" }}
      />
    </Layout>
  );
}
