import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useRef, useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import Loading from "@/components/Loading";

export default function Joey() {
  const [open, setIsOpen] = useState(false);

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

  function onMouseDown(e) {
    console.log(e);
    if (e.target.name === "Leerdoel1") {
      setIsOpen(true);
    }

    if (e.target.name === "Leerdoel2") {
      setIsOpen(true);
    }
  }

  return (
    <Layout data={joeyWorld}>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/MhDTjrqFFUi3B0wH/scene.splinecode"
        onLoad={onLoad}
        onMouseDown={onMouseDown}
        style={{ width: "100%", height: "100vh" }}
      />
      <Drawer open={open} onOpenChange={setIsOpen}>
        <DrawerContent className="max-w-[750px] ml-auto p-5">
          <DrawerTitle>Leerdoel 1</DrawerTitle>
          <DrawerDescription>
            Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
            massa, non egestas ligula metus eu magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce et metus suscipit est
            bibendum interdum eu ut nulla. In tincidunt porttitor imperdiet.
            Phasellus felis velit, laoreet at malesuada ac, finibus non lacus.
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
}
