"use client";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function CameraRig({ children }: Props) {
  const group = useRef();

  return <group ref={group}>{children}</group>;
}
