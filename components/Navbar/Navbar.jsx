import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return(
    <>
    <header className="header">
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="ul-logo">
            <Link href="/">
              <a>
                <img src="/pet-logo.svg" alt="Dog footprint"/>
              </a>
            </Link>
          </li>
          <li className="ul-api">
            <Link href="/">
              <a>
                <span>API</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <style jsx>
    {`
      .header {
        width: 100vw;
        height: 70px;
        background-color: #ffc93c;
      }

      .header-nav {
        width: inherit;
        height: inherit;
      }

      .nav-ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: inherit;
        height: inherit;
      }

      .ul-logo img{
        width: 50px;
      }

      .ul-api a span{
        font-size: 25px;
        color: #000;
        font-weight: 700;
      }
    `}
    </style>
    </>
  );
};

export default Navbar;