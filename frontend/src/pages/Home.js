import React from 'react';
import { Container } from 'react-bootstrap';
import { Calculator, Table } from '../components';

const Home = () => {
  return (
    <Container>
      <h1>Kreditni Kalkulator</h1>
      <Calculator />
      <Table />
    </Container>
  );
};

export default Home;
