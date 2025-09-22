// /src/components/AboutSection.jsx

import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutSection = () => {
  return (
    <section id="nosotros" className="py-5 bg-dark text-white">
      <Container>
        <Row className="align-items-center g-5">
          <Col md={6}>
            <Image
              src="/img/NuestroEquipo.png"
              alt="Imagen del equipo de SIGUE"
              rounded
              fluid 
            />
          </Col>
          <Col md={6}>
            <h2 className="display-4 font-geologica fw-bold mb-4">Unificamos para Potenciar</h2>
            <p className="text-white-50 mb-3">
              En SIGUE, no solo ofrecemos servicios; construimos alianzas estratégicas. Nacimos de la convicción de que la tecnología y la gestión deben ser catalizadores de crecimiento, no barreras. Nuestra misión es desmitificar la complejidad empresarial, unificando procesos, datos y equipos bajo una visión clara y eficiente.
            </p>
            <p className="text-white-50">
              Somos un equipo de expertos apasionados por la optimización. Creemos en el poder de las soluciones integrales para transformar desafíos en oportunidades, permitiendo que nuestros clientes se enfoquen en lo que mejor saben hacer: hacer crecer su negocio.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;