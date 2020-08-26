import React from 'react';
import fetch from 'isomorphic-unfetch';

// Components
import Layout from '../components/Layout/Layout';
import Card from '../components/Card/Card';

export const getServerSideProps = async () => {
  const response = await fetch('https://platzi-avo.vercel.app/api/avo');
  const { data: pets } = await response.json();

  return {
    props: {
      pets,
    },
  }
}

const Home = ({ pets }) => {

  return(
    <Layout>
      <section className="container">
        <Card />
      </section>
    </Layout>
  );
};

export default Home;