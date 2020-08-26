import React from 'react';
import Link from 'next/link';

const Card = ({ id, name, image, breed }) => {
  return(
    <>
      <div className="card">
        <img src={ image } className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{ name }</h5>
          <p className="card-text">Breed: { breed }</p>
          <Link href={`/pet/${id}`}>
            <a className="btn btn-primary">About me</a>
          </Link>
        </div>
      </div>
      <style jsx>
      {`
        .card {
          width: 18rem;
          margin: 50px 0px;
          align-items: center;
          border-radius: 9px;
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow:  15px 15px 30px #d9d9d9, -15px -15px 30px #ffffff;
        }

        .card img {
          width: 80%;
        }

        .card-body a {
          background-color: #ffc93c;
          border-color: #ffc93c;
          font-weight: 600;
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