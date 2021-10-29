import React from "react";
import animationData from "../data/7731-water-loading.json";
import Lottie from "react-lottie";
import { useRouter } from "next/dist/client/router";

const App: React.VFC = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Lottie
        options={defaultOptions}
        height={300}
        width={300}
        eventListeners={[
          {
            eventName: "complete",
            callback: () => router.push("/login"),
          },
        ]}
      />
      <h1>WaterTimer</h1>
    </>
  );
};

export default App;
