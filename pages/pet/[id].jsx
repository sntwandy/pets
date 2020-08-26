import React, { useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';

const Pet = () => {

  return(
    <section className="container">
    { window.location.pathname }
    </section>
  );
};

export default Pet;