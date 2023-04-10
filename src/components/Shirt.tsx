"use client";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import useStore from "@/Context/store";

export default function Shirt() {
  const logoTexture = useStore((state) => state.logoDecal);
  const fullTexture = useStore((state) => state.fullDecal);

  const { scene } = useGLTF("./shirt_baked.glb");

  return (
    <group>
      <mesh castShadow dispose={null}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
}
