"use client";
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';

export default function Layout(): React.ReactElement {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content - Add top padding to account for fixed header */}
      <main className='flex-1 flex flex-col pt-24 sm:pt-20'>
        <div className='px-8 sm:px-4 max-w-7xl mx-auto w-full'>
          <Hero />
          <About />
          <Experience />
        </div>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
