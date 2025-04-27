import { ContactShadows, OrbitControls, Environment } from "@react-three/drei";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import TeslaModel from "./TeslaModel";
import Lights from "./Lights";
import { useState, useRef } from "react";

export default function Scene() {
  const initialRotation = [0, -Math.PI / 8, 0];
  const [teslaRotation] = useState(initialRotation);
  const controlsRef = useRef<OrbitControlsImpl>(null); // Creamos una referencia para OrbitControls
  
  return (
    <>
      <Lights />
      <Environment preset="city" />
      <TeslaModel position={[0, -0.9, 0]} scale={1.5} rotation={teslaRotation} />
      <ContactShadows position={[0, -1.2, 0]} opacity={0.45} scale={10} blur={3} far={4} />
      <OrbitControls
        ref={controlsRef}
        autoRotate
        enableZoom={false}
        enablePan={false}
        autoRotateSpeed={0.3}
        onEnd={() => {
          if(controlsRef.current){
            controlsRef.current.reset(); // <- Esto resetea la cámara

          }
        }}
      />
    </>
  );
}
