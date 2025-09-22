// /src/components/Footer.jsx

import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <Container className="text-center">
        <p className="mb-0">&copy; {new Date().getFullYear()} SIGUE. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};

export default Footer;