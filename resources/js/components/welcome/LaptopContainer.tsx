import { useGLTF } from '@react-three/drei';
import React from 'react';
import * as THREE from "three";


const LaptopContainer = () => {

  let model = useGLTF("./mac.glb");
  let meshes = {};
  model.scene.traverse((e) => {
      meshes[e.name] = e;

  });

  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180)
  return (
    <primitive object={model.scene}></primitive>
  );
};

export default LaptopContainer