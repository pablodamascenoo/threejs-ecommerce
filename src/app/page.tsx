import PrimaryPage from "@/components/Home";
import Customizer from "@/components/Customizer";
import Canvas from "@/components/Canvas";

export default function Home() {
  return (
    <>
      <title>Threejs Ecommerce</title>
      <main className="app transition-all ease-in">
        <PrimaryPage />
        <Customizer />
        <Canvas />
      </main>
    </>
  );
}
