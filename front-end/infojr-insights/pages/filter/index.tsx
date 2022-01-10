import React from 'react';
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Filter from  '../../src/components/Filter'
import Card from '../../src/components/Cards'



export default function filtro() {
  return (
    <div>
      <Header />
      <Filter />
      <Card />
      <Footer />
    </div>
  );
}
