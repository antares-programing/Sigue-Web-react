// /src/components/Scene3D.jsx

import React from 'react';
import { OrbitControls } from '@react-three/drei'; // Opcional: para mover la cámara
import { ModeloGBL } from './ModeloGBL'; // Importamos nuestro modelo

function Scene3D() {
  return (
    <>
      {/* Luces para iluminar el modelo */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      
      {/* Renderizamos nuestro modelo */}
      <ModeloGBL />

      {/* Opcional: Controles para que puedas rotar el modelo con el mouse */}
      <OrbitControls enableZoom={false} autoRotate />
    </>
  );
}

export default Scene3D;