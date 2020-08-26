import React from 'react';

const Footer = () => {
  return(
    <>
    <footer className="footer">
      <div className="made-by-container">
        <span>Made by ❤️:</span>
      </div>
      <div className="parents-container">
        <div className="parents">
          <span>👩‍🦱 Mommy:</span>
          <span>Megan E.</span>
        </div>
        <div className="parents">
          <span>👨‍🦱 Daddy:</span>
          <span>Wandy R.</span>
        </div>
      </div>
    </footer>
    <style jsx>
      {`
        .footer {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100vw;
          height: 80px;
          background-color: #ffc93c;
        }

        .made-by-container span {
          font-size: 16px;
          font-weight: 400;
        }

        .parents span:nth-of-type(1) {
          font-weight: 600;
        }

        .parents span:nth-of-type(2) {
          font-weight: 400;
          font-size: 18px;
          margin-left: 5px;
        }
      `}
    </style>
    </>
  );
};

export default Footer;