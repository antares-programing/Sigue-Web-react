// /src/components/PackagesSection.jsx (Versión corregida con Bootstrap)

import React from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

const PackageCard = ({ pkg, allServices }) => {
    const servicesInPackage = (pkg.serviciosasociados && typeof pkg.serviciosasociados === 'string')
        ? pkg.serviciosasociados.split(',').map(name => {
            const foundService = allServices.find(s => s.titulo.trim().toLowerCase() === name.trim().toLowerCase());
            if (foundService) {
                return `<li class="mb-2"><strong class="font-geologica fw-bold text-white">${foundService.titulo}:</strong><br><span class="text-white-50 small">${foundService.descripcion1}</span></li>`;
            }
            return `<li class="mb-2">${name.trim()}</li>`;
        }).join('')
        : '<li>No hay servicios detallados.</li>';

    return (
        <div className="card-container bg-dark rounded-lg shadow-lg text-white h-100">
            <div className="card-image-wrapper">
                {pkg.imagen ? (
                    <img src={`/${pkg.imagen}`} alt={pkg.titulo} className="card-image" />
                ) : (
                    <div className="card-image bg-success"></div>
                )}
            </div>
            <div className="card-text-container">
                <div className="flex-grow-1">
                    <div className="d-flex justify-content-between align-items-start">
                        <h3 className="h2 font-geologica fw-bold mb-3">{pkg.titulo}</h3>
                        {pkg.precio && <p className="display-6 font-geologica fw-bold text-success">{pkg.precio}</p>}
                    </div>
                    <p className="text-white-50 mb-4">{pkg.descripcion}</p>
                    <h4 className="font-geologica fw-bold mt-4 mb-2">Incluye:</h4>
                    <ul className="list-unstyled" dangerouslySetInnerHTML={{ __html: servicesInPackage }}></ul>
                </div>
                <div className="mt-auto pt-4">
                    <Button variant="accent" className="w-100 add-to-cart-btn">Agregar Paquete</Button>
                </div>
            </div>
        </div>
    );
};

const PackagesSection = ({ packages, services, loading, error }) => {
  return (
    <section id="paquetes" className="py-5 bg-black text-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 font-geologica fw-bold">Nuestros Paquetes</h2>
          <p className="lead text-white-50 mt-2">Combinaciones de servicios pensadas para un impacto máximo.</p>
        </div>
        <Row className="g-4 justify-content-center">
            {loading && <Col className="text-center"><Spinner animation="border" variant="light" /></Col>}
            {error && <Col><p className="text-center text-danger">{error}</p></Col>}
            {!loading && !error && packages.map(pkg => (
                <Col lg={10} key={pkg.id}>
                    <PackageCard pkg={pkg} allServices={services} />
                </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PackagesSection;