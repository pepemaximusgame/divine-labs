import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { Loader } from "./Loader";

export const LandingPage =()=>{
    return(
        <>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
           <Suspense fallback={<Loader />}>
                <color attach="background" args={["#171720"]} />
                <fog attach="fog" args={["#171720", 10, 30]} />
                  <Experience />
                <EffectComposer>
                  <Bloom mipmapBlur intensity={1.2} />
                </EffectComposer>
                </Suspense>
              </Canvas>
              <UI />
        </>
    )
}