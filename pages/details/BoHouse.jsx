import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";

export default function BoHouse() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  }, []);

  return (
    <>
      <Layout>
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/EFfS33KJAWAWQrDp/scene.splinecode"
          style={{ width: "100%", height: "100vh" }}
        />
      </Layout>
    </>
  );
}
