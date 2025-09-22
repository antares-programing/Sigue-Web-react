// /src/components/ModeloGBL.jsx

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// 1. Importa el modelo directamente. Vite lo manejará.
//    Asegúrate de que la ruta sea correcta desde este archivo.
import modelUrl from '../assets/mi-modelo.glb';

export function ModeloGBL(props) {
  // 2. Usa la variable importada en useGLTF
  const { scene } = useGLTF(modelUrl);
  const ref = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.2;
    }
  });
  
  // 3. Usa el 'scene' del modelo directamente con <primitive />
  //    Esto es más simple y robusto que buscar nodos específicos.
  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} scale={1.5} />
    </group>
  );
}

// 4. Precarga el modelo usando la misma variable
useGLTF.preload(modelUrl);