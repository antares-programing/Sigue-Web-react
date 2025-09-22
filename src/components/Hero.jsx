// /src/components/Hero.jsx (versión actualizada)

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Scene3D from './Scene3D'; // <-- 1. IMPORTAMOS LA NUEVA ESCENA

const Hero = () => {
  return (
    <section id="inicio" className="position-relative vh-100 d-flex align-items-center justify-content-center text-white overflow-hidden">
      
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#000' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            {/* 2. USAMOS NUESTRO NUEVO COMPONENTE 3D AQUÍ */}
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      <div className="hero-overlay"></div>

      <Container className="position-relative text-center" style={{ zIndex: 2 }}>
        {/* ...el resto del código del Hero (título, párrafo, botón) no cambia... */}
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <h1 className="display-3 fw-bold font-geologica mb-4">
              Soluciones Integrales para la Gestión y Unificación de tu Empresa
            </h1>
            <p className="lead mb-4 text-white-50">
              Optimizamos tus procesos y potenciamos tu crecimiento con estrategias a medida.
            </p>
            <Button href="#contacto" variant="accent" size="lg" className="font-geologica fw-bold">
              Solicitar una Consulta Gratuita
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;