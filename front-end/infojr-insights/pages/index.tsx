import React from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import AsideHome from '../src/components/AsideHome';
import Card from '../src/components/Cards';

export default function Home() {
  return (
    <div>
      <Header />

      <div style={{display:"flex"}}>
        <AsideHome />
        <Card />
      </div>
      <Footer />
    </div>
  );
}
