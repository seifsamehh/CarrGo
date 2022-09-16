import React from 'react'
import logo from '../../images/logo.webp'
import apple from '../../images/apple.webp'
import google from '../../images/google.webp'
import './style/footer.css'

const Footer = _ => {
  return (
    <footer className='flex justify-center items-center gap-6 px-6'>
        <div className="logo">
            <img src={logo} alt="logo" />
            <p className='my-6'>Nulla justo neque, tincidunt id bibendum a, rhoncus et eros.<br/> Vestibulum commodo diam ut risus pulvinar consequat vitae a dui.<br/> Vivamus sed molestie diam. Maecenas vitae enim lacus.</p>
            <h1 className='text-amber-400 text-2xl'>Toll Free Helpline</h1>
            <h3>(+1) 123 4567 890</h3>
        </div>
        <div className="links">
            <h1 className='text-3xl font-bold mb-4'>Useful Links</h1>
            <div className="box flex items-center gap-6">
                <div className="left flex flex-col gap-3">
                    <a href="/" className='hover:text-amber-400'>About</a>
                    <a href="/" className='hover:text-amber-400'>Our vehicles</a>
                    <a href="/" className='hover:text-amber-400'>Services</a>
                    <a href="/" className='hover:text-amber-400'>Packages</a>
                    <a href="/" className='hover:text-amber-400'>Login</a>
                    <a href="/" className='hover:text-amber-400'>Register</a>
                    <a href="/" className='hover:text-amber-400'>Latest News</a>
                </div>
                <div className="right flex flex-col gap-3">
                    <a href="/" className='hover:text-amber-400'>Ride</a>
                    <a href="/" className='hover:text-amber-400'>Drive</a>
                    <a href="/" className='hover:text-amber-400'>Become a Driver</a>
                    <a href="/" className='hover:text-amber-400'>Terms & Conditions</a>
                    <a href="/" className='hover:text-amber-400'>Press</a>
                    <a href="/" className='hover:text-amber-400'>Help</a>
                    <a href="/" className='hover:text-amber-400'>Privecy policy</a>
                </div>
            </div>
        </div>
        <div className="head flex flex-col gap-4">
            <h1 className='text-3xl font-bold mb-4'>Head Office</h1>
            <p>15 Street No, Ox Building,<br/>Near Station, 1356.</p>
            <p>Phone number: (+1) 123 4567 890</p>
            <p>Email Address: Carrgo@gmail.com</p>
            <p>Fax : Service@carrgo.com</p>
        </div>
        <div className="mobile">
            <h1 className='text-3xl font-bold mb-4'>Download Mobile App</h1>
            <div className="downloads flex gap-2 my-5">
                <img src={apple} alt="apple" />
                <img src={google} alt="google" />
            </div>
            <div className="buttons flex gap-2">
                <button>
                    <span className="shadow"/>
                    <span className="edge"/>
                    <span className="front text"> Become A Driver</span>
                </button>
                <button>
                    <span className="shadow"/>
                    <span className="edge"/>
                    <span className="front text"> Ride With CarrGO</span>
                </button>
            </div>
        </div>
    </footer>
  )
}

export default Footer