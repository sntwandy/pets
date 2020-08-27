import React from 'react';

const PetLayout = ({ name, image, breed, description }) => {
  return(
    <>
    <div className="pet-layout-container">
      <div className="layout-image">
        <img src={ image } alt={ name }/>
      </div>
      <div className="layout-name">
        <span>{ name }</span>
      </div>
      <div className="layout-breed">
        <span>Breed: { breed }</span>
      </div>
      <div className="layout-about">
        <p>{ description }</p>
      </div>
    </div>

    <style jsx>
      {`
        .pet-layout-container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .layout-image {
          max-width: 200px;
        }

        .layout-image img {
          width: 100%;
        }

        .layout-name span {
          font-size: 1.8em;
          font-weight: 600;
        }
      `}
    </style>
    </>
  );
};

export default PetLayout;