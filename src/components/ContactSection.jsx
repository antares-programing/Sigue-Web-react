// /src/components/ContactSection.jsx

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  // La lógica del formulario no cambia
  async function handleFormSubmit(event) { /* ... tu lógica ... */ }

  return (
    <section id="contacto" className="py-5 bg-light text-dark">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 font-geologica fw-bold">Hablemos de tu Proyecto</h2>
          <p className="lead text-muted mt-2">Completa el formulario y uno de nuestros especialistas se pondrá en contacto contigo.</p>
        </div>
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <div className="bg-white p-4 p-md-5 rounded-lg shadow">
              <Form id="contact-form" action="https://formspree.io/f/xnnbgqly" method="POST" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="contact-name">
                  <Form.Label className="font-geologica fw-bold">Nombre</Form.Label>
                  <Form.Control type="text" name="name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact-email">
                  <Form.Label className="font-geologica fw-bold">Email</Form.Label>
                  <Form.Control type="email" name="_replyto" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contact-phone">
                  <Form.Label className="font-geologica fw-bold">Teléfono de Contacto</Form.Label>
                  <Form.Control type="tel" name="telefono" required />
                </Form.Group>
                <Form.Group className="mb-4" controlId="contact-message">
                  <Form.Label className="font-geologica fw-bold">Mensaje</Form.Label>
                  <Form.Control as="textarea" name="message" rows={4} required />
                </Form.Group>
                <div className="text-center">
                  <Button variant="accent" type="submit" size="lg" className="font-geologica fw-bold">
                    Enviar Mensaje
                  </Button>
                </div>
              </Form>
              <p id="contact-form-status" className="text-center mt-4"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;