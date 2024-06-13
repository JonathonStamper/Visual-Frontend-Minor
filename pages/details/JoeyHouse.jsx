import Spline from "@splinetool/react-spline";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import Layout from "@/components/layout";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";

export default function JoeyHouse() {
  const [isLoading, setIsLoading] = useState(true);
  const [open, setIsOpen] = useState(false);
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
  }

  return (
    <>
      <Layout>
        {isLoading && <Loading />}
        <Spline
          scene="https://prod.spline.design/TPlYELNnByEULOXJ/scene.splinecode"
          onMouseDown={onMouseDown}
        />
        <Drawer open={open} onOpenChange={setIsOpen}>
          <DrawerContent className="max-w-[750px] ml-auto p-5 h-full">
            <DrawerTitle>Leerdoel 1</DrawerTitle>
            <DrawerDescription>
              Nunc ornare, tellus a iaculis condimentum, libero quam accumsan
              massa, non egestas ligula metus eu magna. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Fusce et metus suscipit
              est bibendum interdum eu ut nulla. In tincidunt porttitor
              imperdiet. Phasellus felis velit, laoreet at malesuada ac, finibus
              non lacus. Nunc ornare, tellus a iaculis condimentum, libero quam
              accumsan massa, non egestas ligula metus eu magna. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce et metus
              suscipit est bibendum interdum eu ut nulla. In tincidunt porttitor
              imperdiet. Phasellus felis velit, laoreet at malesuada ac, finibus
              non lacus.
            </DrawerDescription>
          </DrawerContent>
        </Drawer>
      </Layout>
    </>
  );
}
