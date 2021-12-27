import React from 'react';
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import AsideHome from '../src/components/AsideHome';
import Card from '../src/components/Cards/index';
import { ContainerCards } from '../src/styles/card';

export default function Home() {
  return (
    <div>
      <Header />
      

      <div style={{display:"flex", alignItems:"center", padding:"0vw 7vw 5vw 9vw", gap: "8rem"} }>
        <AsideHome />
        <ContainerCards>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
      
        </ContainerCards>
        
      
      </div>
      <Footer />
    </div>
  );
}
