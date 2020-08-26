import React from 'react';

const Card = ({ name, image, breed }) => {
  return(
    <>
      <div className="card">
        <img src={ image } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">Breed: { breed }</p>
          <a href="#" className="btn btn-primary">About me</a>
        </div>
      </div>
      <style jsx>
      {`
        .card {
          width: 18rem;
        }
      `}
      </style>
    </>
  );
};

export default Card;