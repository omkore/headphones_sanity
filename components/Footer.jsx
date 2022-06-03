import React from 'react';
import Link from 'next/link';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 E-Commerce All rights reserverd</p>
      <p className="icons">
        <Link href={'https://www.instagram.com/'} >
        <a target="_blank">
        <AiFillInstagram />
        </a>  
        </Link>
        <Link href={'https://twitter.com/'}>
        <a target="_blank">
        <AiOutlineTwitter />
        </a>
        </Link> 
      </p>
    </div>
  )
}

export default Footer