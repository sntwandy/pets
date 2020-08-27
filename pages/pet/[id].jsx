import React from 'react';
import fetch from 'isomorphic-unfetch';

// Components
import PetLayout from '../../components/PetLayout/PetLayout';

export async function getStaticPaths() {
  const response = await fetch('https://pets-weld.vercel.app/api/pets');
  const { data } = await response.json();

  const paths = data.map( ({ id }) => ({
    params: {
      id,
    }
  }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const response = await fetch(`https://pets-weld.vercel.app/api/pets/${params?.id}`);
  const pet = await response.json();

  return {
    props: {
      pet,
    }
  }
}

const Pet = ({ pet }) => {

  return(
    <section className="container">
      <PetLayout name={pet.name} image={pet.image} description={pet.about} />
    </section>
  );
};

export default Pet;