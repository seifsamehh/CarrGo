import React from 'react'
import qr from '../../images/qr.webp'
import apple from '../../images/apple.webp'
import google from '../../images/google.webp'
import { Parallax } from 'react-scroll-parallax';
import './style/download.css'

const Download = _ => {
  return (
    <section className='download'>
        <h1 className='title text-center my-8 text-7xl'>Download CarrGo</h1>
        <div className="content flex gap-8">
            <Parallax translateX={["-100px", "200px"]}>
                <div className="left">
                    <img src={qr} alt="qr code" />
                </div>
            </Parallax>
            <div className="right">
                <h1 className='text-5xl'>Download the CarrGo mobile application</h1>
                <p className='my-7'>Nunc volutpat tincidunt est a scelerisque. Aliquam erat volutpat. Donec varius ex in justo pharetra, nec mollis erat porta. Donec sit amet facilisis neque. In hac habitasse platea dictumst.</p>
                <div className="downloads flex items-center gap-8">
                    <a href="/">
                        <img src={apple} alt="apple" />
                    </a>
                    <a href="/">
                        <img src={google} alt="google" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Download