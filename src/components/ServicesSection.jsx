// /src/components/ServicesSection.jsx

import React, { useState, useMemo } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap'; // Importamos componentes

// El componente ServiceCard no necesita cambios, ya que su estilo 
// principal viene de las clases personalizadas en index.css.
const ServiceCard = ({ service }) => {
  return (
    <div className="card-container bg-dark rounded-lg shadow-lg text-white h-100">
      <div className="card-image-wrapper">
        {service.imagen ? (
          <img src={`/${service.imagen}`} alt={service.titulo} className="card-image" />
        ) : (
          <div className="card-image bg-secondary"></div>
        )}
      </div>
      <div className="card-text-container">
        <div className="flex-grow-1">
          <h3 className="h2 font-geologica fw-bold mb-3 text-white">{service.titulo}</h3>
          <p className="text-white-50 mb-4">{service.descripcion1}</p>
        </div>
        <div className="mt-auto">
          <div className="pt-4 d-flex justify-content-between align-items-end">
            <a href="#" className="font-geologica fw-bold h5 text-success text-decoration-none">Ver más &rarr;</a>
            {service.proveedor && (
              <div className="text-end">
                <span className="small text-muted d-block">Brindado por:</span>
                <div className="d-flex align-items-center justify-content-end gap-2 mt-1">
                  <span className="font-geologica fw-bold small text-light">{service.proveedor}</span>
                  {service.logoproveedor && <img src={`/${service.logoproveedor}`} alt={`Logo de ${service.proveedor}`} style={{ height: '24px', width: '24px' }} className="rounded-circle object-fit-contain" />}
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <Button variant="accent" className="w-100 add-to-cart-btn">Agregar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};


const ServicesSection = ({ services, loading, error }) => {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const categories = useMemo(() => {
    if (!services || services.length === 0) return [];
    return ['Todos', ...new Set(services.map(s => s.categoria).filter(Boolean))];
  }, [services]);

  const filteredServices = useMemo(() => {
    if (activeCategory === 'Todos') return services;
    return services.filter(s => s.categoria === activeCategory);
  }, [activeCategory, services]);

  return (
    // 'py-5' es el padding de Bootstrap, 'bg-light' es un fondo gris claro
    <section id="servicios" className="py-5 bg-light text-dark">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 font-geologica fw-bold">Nuestros Servicios</h2>
          <p className="lead text-muted">Soluciones diseñadas para resolver tus desafíos empresariales.</p>
        </div>
        
        {/* Filtros de categorías */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'dark' : 'outline-dark'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Contenido principal */}
        <Row className="g-4"> {/* g-4 es el espaciado (gap) en Bootstrap */}
          {loading && (
            <Col className="text-center">
              <Spinner animation="border" />
              <p className="mt-2">Cargando servicios...</p>
            </Col>
          )}
          {error && <Col><p className="text-center text-danger">{error}</p></Col>}
          
          {!loading && !error && filteredServices.map(service => (
            // col-lg-4 -> en pantallas grandes, ocupa 1/3 del ancho (3 por fila)
            // col-md-6 -> en pantallas medianas, ocupa 1/2 del ancho (2 por fila)
            <Col lg={4} md={6} key={service.id}>
              <ServiceCard service={service} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServicesSection;