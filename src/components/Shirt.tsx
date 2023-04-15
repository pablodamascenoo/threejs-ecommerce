"use client";
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import useStore from "@/Context/store";

export default function Shirt() {
  const logoTexture = useTexture(useStore((state) => state.logoDecal));
  const fullTexture = useTexture(useStore((state) => state.fullDecal));
  const isFullTexture = useStore((state) => state.isFullTexture);
  const isLogoTexture = useStore((state) => state.isLogoTexture);
  const color = useStore((state) => state.color);

  // @ts-ignore
  const { nodes } = useGLTF("./shirt_baked.glb");

  useFrame((state, delta) =>
    // @ts-ignore
    easing.dampC(nodes.T_Shirt_male.material.color, color, 0.25, delta)
  );

  return (
    <group>
      <mesh
        castShadow
        dispose={null}
        geometry={nodes.T_Shirt_male.geometry}
        material={nodes.T_Shirt_male.material}
      >
        {isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={0}
            scale={1}
            map={fullTexture}
          />
        )}
        {isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={0}
            scale={0.15}
            map={logoTexture}
            map-anisotropy={16}
            depthTest={false}
            depthWrite={true}
          />
        )}
      </mesh>
    </group>
  );
}
