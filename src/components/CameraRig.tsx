"use client";
import useStore from "@/Context/store";
import { GroupProps, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function CameraRig({ children }: Props) {
  const group = useRef<GroupProps>();
  const intro = useStore((state) => state.intro);

  useFrame((state, delta) => {
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;

    let targetPosition: [x: number, y: number, z: number] = [-0.4, 0, 2];
    if (intro) {
      if (isBreakpoint) targetPosition = [-0.3, 0, 2];
      if (isMobile) targetPosition = [0, 0.5, 2.5];
    } else {
      if (isMobile) targetPosition = [0, 0, 2.5];
      else targetPosition = [0, 0, 2];
    }

    easing.damp3(state.camera.position, targetPosition, 0.25, delta);

    if (group.current && group.current.rotation) {
      easing.dampE(
        // @ts-ignore
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  // @ts-ignore
  return <group ref={group}>{children}</group>;
}
