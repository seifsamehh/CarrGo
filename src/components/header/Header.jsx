import React from 'react'
import logo from '../../images/logo-main.webp'
import location from '../../images/18-location-pin-outline.gif'
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import './style/header.css'

const Header = _ => {
  return (
    <header className='flex justify-between items-center p-4 bg-white'>
        <div className="left-part flex gap-4">
            <img src={logo} alt="logo" />
            <form className="form">
                <img src={location} alt="location" />
                <input className="input" placeholder="Tell us your location" required type="text"/>
                <button className="reset" type="reset">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </form>
        </div>
        <nav className='lg-screen flex gap-7'>
            <a href="/" className="link link--elara">
				<span>DRIVER DASHBOARD</span>
			</a>
            <a href="/" className="link link--elara">
				<span className='flex items-center gap-2'><BsFillPersonFill/>DRIVE WITH US</span>
			</a>
            <a href="/" className="link link--elara">
				<span className='flex items-center gap-2'><AiFillCar/>BOOK A RIDE</span>
			</a>
        </nav>
    </header>
  )
}

export default Header