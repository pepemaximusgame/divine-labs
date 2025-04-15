//https://gltf.pmnd.rs/

import React, { useRef,useEffect } from 'react';
import { useGLTF, useAnimations, Text } from '@react-three/drei';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

export function ToadCharacter({
  animation="look-around",
  name="Player",
   ...props}) {

  const group = useRef();
  const { nodes, materials, animations } = useGLTF("models/toadNew.glb");
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log('Loaded Materials:', materials);
    actions[animation]?.reset().fadeIn(0.24).play();
    return () => actions?.[animation]?.fadeOut(0.24);
  }, [animation]);

  // useEffect(() => {
  //   if (materials['frog-mat']) {
  //     materials['frog-mat'].color = new THREE.Color(color);
  //     materials['frog-mat'].needsUpdate = true; // Important for the change to take effect
  //   }
  // }, [materials, color]); // Re-run if materials load or color prop changes

  const textRef = useRef();
  useFrame(({ camera }) => {
    if (textRef.current) {
      textRef.current.lookAt(camera.position);
    }
  });



  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={textRef}>
      <Text
          position-y={3.8}
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
          font="fonts/PaytoneOne-Regular.ttf"
        >
          {name}
          <meshBasicMaterial color="white" />
        </Text>
        <Text
          position-y={3.78}
          position-x={0.02}
          position-z={-0.02}
          fontSize={0.5}
          anchorX="center"
          anchorY="middle"
          font="fonts/PaytoneOne-Regular.ttf"
        >
          {name}
          <meshBasicMaterial color="black" />
        </Text>
      </group>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.368}>
          <group name="toad-warriorfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="root"
                  position={[-1.773, -1.593, 6.503]}
                  rotation={[-1.597, 0.018, -0.002]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_65"
                      geometry={nodes.Object_65.geometry}
                      material={materials['frog-mat']}
                      skeleton={nodes.Object_65.skeleton}
                      morphTargetDictionary={nodes.Object_65.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_65.morphTargetInfluences}
                      castShadow
                      receiveShadow
                    />
                    <group
                      name="Object_64"
                      position={[-1.773, -1.593, 6.503]}
                      rotation={[-1.597, 0.018, -0.002]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
                <group
                  name="default"
                  position={[-1.773, -1.593, 6.503]}
                  rotation={[-1.597, 0.018, -0.002]}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

 useGLTF.preload('models/toadNew.glb');
