import { useRef, useState, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Layout from "@/components/layout";
import Loading from "@/components/Loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Home() {
  const [dialog, setDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const door = useRef();

  function onLoad(spline) {
    const obj = spline.findObjectByName("Doors");
    door.current = obj;
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Check if the user has seen the dialog before
    const hasSeenDialog = localStorage.getItem("hasSeenDialog");

    if (!hasSeenDialog) {
      // If not, show the dialog and set the flag in localStorage
      setDialog(true);
      localStorage.setItem("hasSeenDialog", "true");
    }
  }, []);

  const closeDialog = () => {
    setDialog(false);
  };

  return (
    <Layout data={door} backToLobby={false}>
      {isLoading && <Loading />}
      <Spline
        scene="https://prod.spline.design/t8-IY41IMWdxlrWr/scene.splinecode"
        onLoad={onLoad}
        style={{ width: "100%", height: "100vh" }}
      />
      <Dialog open={dialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-barlow mb-4 text-3xl">
              Introduction
            </DialogTitle>
            <DialogDescription className="font-montserrat text-xl">
              Welcome to Portal World! Click on each portal to discover our
              personal world and find our learning goals/achievements
            </DialogDescription>
          </DialogHeader>
          <button
            className="bg-theme-Purple text-white max-w-[175px] ml-auto py-2 px-3 rounded-md mt-10"
            onClick={closeDialog}
          >
            Continue exploring
          </button>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
