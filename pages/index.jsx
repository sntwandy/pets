import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

// Components
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

const Home = () => {
  const [pets, setPets] = useState([]);

  useEffect( async () => {
    const response = await fetch('https://pets-weld.vercel.app/api/pets');
    const data = await response.json()
    console.log(data);
  }, []);

  return(
    <Layout>
      <section className="container">
        <Card />
      </section>
    </Layout>
  );
};

export default Home;