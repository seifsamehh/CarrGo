import React from 'react'
import { FaFacebookF,FaTwitter,FaInstagram,FaGooglePlusG,FaLinkedinIn,FaPinterestP } from "react-icons/fa";
import './style/subFooter.css'

const SubFooter = _ => {
  return (
    <div className='sub-footer flex justify-around items-center py-8'>
        <p>&copy; Copyright 2022 by Tortoiz. All Right Reserved.</p>
        <ul className='flex gap-6'>
            <li><a href="/" className='hover:text-blue-700'><FaFacebookF/></a></li>
            <li><a href="/" className='hover:text-blue-500'><FaTwitter/></a></li>
            <li><a href="/" className='hover:text-pink-600'><FaInstagram/></a></li>
            <li><a href="/" className='hover:text-rose-800'><FaGooglePlusG/></a></li>
            <li><a href="/" className='hover:text-blue-500'><FaLinkedinIn/></a></li>
            <li><a href="/" className='hover:text-rose-800'><FaPinterestP/></a></li>
        </ul>
    </div>
  )
}

export default SubFooter