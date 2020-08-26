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
          margin: 20px 0px;
          align-items: center;
        }

        .card img {
          width: 80%;
        }

        .card-body a {
          background-color: #40a8c4;
          border-color: #40a8c4;
        }

        .card-title {
          font-weight: 600;
        }
      `}
      </style>
    </>
  );
};

export default Card;