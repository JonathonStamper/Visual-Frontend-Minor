import Spline from "@splinetool/react-spline";
import { Suspense } from "react";

export default function Room() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/mcWj2u5b3Yonin51/scene.splinecode" />
    </Suspense>
  );
}
