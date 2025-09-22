// /src/components/Navbar.jsx

import React from 'react';
// Importamos los componentes que vamos a usar de react-bootstrap
import { Navbar, Container, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  const navLinks = [
    { href: '#inicio', text: 'Inicio' },
    { href: '#servicios', text: 'Servicios' },
    { href: '#paquetes', text: 'Paquetes' },
    { href: '/Sigue-Educandote/', text: 'Sigue Educándote' },
    { href: '#nosotros', text: 'Sobre Nosotros' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    // Usamos el componente Navbar de react-bootstrap
    // - `bg="dark"` y `variant="dark"` para un fondo oscuro con texto claro.
    // - `sticky="top"` para que se quede fija arriba.
    // - `expand="lg"` para que el menú se colapse en pantallas pequeñas (lg = large).
    <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand href="#inicio">
          <img
            src="/img/LogoWeb.png"
            alt="Logotipo de SIGUE"
            height="30" // Bootstrap maneja el tamaño de forma ligeramente diferente
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        {/* El botón de hamburguesa para móviles */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Contenido que se colapsará en el menú móvil */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto"> {/* ms-auto empuja los links a la derecha */}
            {navLinks.map((link) => (
              <Nav.Link key={link.text} href={link.href}>
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
        
        {/* Aquí puedes agregar el ícono del carrito si lo necesitas */}
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
