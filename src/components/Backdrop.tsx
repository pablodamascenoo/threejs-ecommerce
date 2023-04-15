import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

export default function Backdrop() {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={5}
        radius={8}
        intensity={0.25}
        ambient={0.25}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}
