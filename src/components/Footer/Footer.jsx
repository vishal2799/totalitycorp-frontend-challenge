import React from 'react';
import './Footer.css';

const Footer = ({ bottom }) => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <a href='#'>Tesla © 2022</a>
        </li>
        <li>
          <a href='#'> Privacy &amp; Legal </a>
        </li>
        <li>
          <a href='#'> careers </a>
        </li>
        <li>
          <a href='#'>vehicle recalls</a>
        </li>
        <li>
          <a href='#'>news</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
