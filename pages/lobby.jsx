import { useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";

export default function Home() {
  const [showModal, setShowModal] = useState(true);
  const door = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Doors");
    door.current = obj;
  }

  return (
    <Layout data={door}>
      <Spline
        scene="https://prod.spline.design/t8-IY41IMWdxlrWr/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
      {showModal && (
        <div className="absolute bg-white p-10 rounded-sm left-[50%] translate-x-[-50%] top-[50%] max-w-[425px]">
          <h2 className="mb-5">Introduction</h2>
          <p className="mb-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, sint
            ullam. Ipsam explicabo illo a ratione ipsa soluta non perferendis!
          </p>
          <div className="flex justify-end">
            <button
              className="bg-theme-Purple text-white font-medium p-3 rounded-sm"
              onClick={() => setShowModal(false)}
            >
              Continue Exploring
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
