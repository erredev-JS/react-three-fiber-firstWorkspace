export default function Lights() {
    return (
      <>
        <ambientLight intensity={6.6} color={"black"} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      </>
    )
  }
  