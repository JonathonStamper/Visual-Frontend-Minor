import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";

import Loading from "@/components/Loading";

export default function Joey() {
  const [open, setIsOpen] = useState(false);
  const [open2, setIsOpen2] = useState(false);
  const [open3, setIsOpen3] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

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
      setIsOpen2(true);
    }

    if (e.target.name === "Leerdoel3") {
      setIsOpen3(true);
    }
  }

  return (
    <Layout>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/5hcWLmfEBYVljPll/scene.splinecode"
        style={{ width: "100%", height: "100vh" }}
        onMouseDown={onMouseDown}
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
            Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
            massa, non egestas ligula metus eu magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce et metus suscipit est
            bibendum interdum eu ut nulla. In tincidunt porttitor imperdiet.
            Phasellus felis velit, laoreet at malesuada ac, finibus non lacus.
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
      <Drawer open={open2} onOpenChange={setIsOpen2}>
        <DrawerContent className="max-w-[750px] ml-auto p-5">
          <DrawerTitle>Leerdoel 2</DrawerTitle>
          <DrawerDescription>
            Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
            massa, non egestas ligula metus eu magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce et metus suscipit est
            bibendum interdum eu ut nulla. In tincidunt porttitor imperdiet.
            Phasellus felis velit, laoreet at malesuada ac, finibus non lacus.
            Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
            massa, non egestas ligula metus eu magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce et metus suscipit est
            bibendum interdum eu ut nulla. In tincidunt porttitor imperdiet.
            Phasellus felis velit, laoreet at malesuada ac, finibus non lacus.
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
      <Drawer open={open3} onOpenChange={setIsOpen3}>
        <DrawerContent className="max-w-[750px] ml-auto p-5">
          <DrawerTitle>Leerdoel 3</DrawerTitle>
          <DrawerDescription>
            Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
            massa, non egestas ligula metus eu magna. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Fusce et metus suscipit est
            bibendum interdum eu ut nulla. In tincidunt porttitor imperdiet.
            Phasellus felis velit, laoreet at malesuada ac, finibus non lacus.
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
