import React from 'react';
import { assets } from '../assets/assets'; 

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-3 mt-20 px-6 bg-white/10'>
      <img src={assets.logo} alt="logo" width={150} />
      
      <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright © Greatstack.dev | All rights reserved.</p>
      
      <div className='flex gap-4'>
        <img src={assets.facebook_icon} alt='facebook' width={35} />
        <img src={assets.twitter_icon} alt='twitter' width={35} />
        <img src={assets.instagram_icon} alt='instagram' width={35} />
      </div>
    </div>
  );
};

export default Footer;
