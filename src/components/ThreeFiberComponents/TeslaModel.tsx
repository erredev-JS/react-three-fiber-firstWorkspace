import { useGLTF } from '@react-three/drei'

export default function TeslaModel(props: any) {
  const { scene } = useGLTF('./models/tesla_cybertruck.glb')
  return <primitive object={scene} {...props} />
}
