import PrimaryPage from "@/components/Home";
import Customizer from "@/components/Customizer";
import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <>
      <head>
        <title>Threejs Ecommerce</title>
      </head>
      <main className="app transition-all ease-in">
        <PrimaryPage />
        <Customizer />
        <Canvas />
      </main>
    </>
  );
}
