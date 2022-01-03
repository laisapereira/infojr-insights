import React from 'react';
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Filter from  '../../src/components/Filter'
import Card from '../../src/components/Cards'
import { useCard } from '../../src/hooks/useCard';
import { useEffect } from 'react';    // toda vez que recarregar a página aplicar o getAll



export default function filtro() {

  const { getAll } = useCard();


  useEffect (() => {
    getAll();
  }, [getAll])
  return (
    <div>
      <Header />
      <Filter />
      <Card />
      <Footer />
    </div>
  );
}
