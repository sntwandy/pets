import React from 'react';
import fetch from 'isomorphic-unfetch';

// Components
import Card from '../components/Card/Card';

export const getStaticProps = async () => {
  const response = await fetch('https://pets-weld.vercel.app/api/pets');
  const { data: pets } = await response.json();

  return {
    props: {
      pets,
    },
  }
}

const Home = ({ pets }) => {

  return(
    <>
      <section className="container pets-section">
        { pets.map( ({ id, name, image, breed }) => <Card key={id} id={id} name={name} image={image} breed={breed} /> )}
      </section>
    <style jsx>
      {`
        .pets-section {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
      `}
    </style>
    </>
  );
};

export default Home;