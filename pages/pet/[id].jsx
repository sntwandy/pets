import React from 'react';
import fetch from 'isomorphic-unfetch';

export const getStaticPaths = async () => {
  const response = await fetch('https://pets-weld.vercel.app/api/pets');
  const { data } = await response.json();

  const paths = data.map(({ id  }) => ({
    params: {
      id
    }
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/pet/${params?.id}`);
  const pet = await response.json();
  console.log(pet);
  return {
    props: {
      pet,
    },
  }
}

const Pet = ({ pet }) => {

  return(
    <section className="container">
    </section>
  );
};

export default Pet;