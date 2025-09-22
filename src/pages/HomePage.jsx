import React from 'react';
import AppNavbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import PackagesSection from '../components/PackagesSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

import { useSheetData } from '../hooks/useSheetData';

function HomePage() {
  const { services, packages, loading, error } = useSheetData();

  return (
    <>
      <AppNavbar />
      <main>
        <Hero />
        <ServicesSection services={services} loading={loading} error={error} />
        <PackagesSection packages={packages} services={services} loading={loading} error={error} />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;

