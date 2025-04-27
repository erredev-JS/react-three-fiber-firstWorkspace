import { Canvas } from "@react-three/fiber";
import style from "./HeroTesla.module.css";
import Scene from "../ThreeFiberComponents/Scene";
export const HeroTesla = () => {
  return (
    <div className={style.canvasContainer}>
      <div className={style.textContainer}>
      <p className={style.imgLogo}>Cybertruck Model X</p>
      <p className={style.subtitle}>Starting at $60,590</p>
      </div>
      <Canvas camera={{ position: [4, 0.4, 5], fov: 100 }} shadows>
        <Scene />
      </Canvas>
      <div className={style.buttonsContainer}>
      <button className={style.button}>Order Now</button>
      <button className={style.button}>Demo Drive</button>

      </div>
    </div>
  );
};
