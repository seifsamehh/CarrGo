import React from 'react'
import booking from '../../images/booking.webp'
import driver from '../../images/driver.webp'
import track from '../../images/track.webp'
import safe from '../../images/safe.webp'
import { Parallax } from 'react-scroll-parallax'
import { motion } from "framer-motion"
import './style/works.css'

const Works = _ => {
  return (
    <article className='works'>
        <h1 className='title text-center mt-8 text-7xl'>How It Work</h1>
        {/* start section 1 */}
        <section className="first-step flex justify-around items-center h-screen sticky top-0">
            <Parallax translateX={["-100px", "200px"]}>
                <div className="image p-28">
                    <motion.img src={booking} alt="booking" 
                        drag
                        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
                    />
                </div>
            </Parallax>
            <Parallax translateY={["-100px", "200px"]}>
                <div className="content">
                    <h1 className='text-center text-5xl mb-4'>Book in Just 2 Tabs</h1>
                    <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                </div>
            </Parallax>
        </section>
        {/* end section 1 */}
        {/* start section 2 */}
        <section className="second-step flex justify-around items-center h-screen sticky top-0">
            <Parallax translateX={["-100px", "200px"]}>
                <div className="image p-28">
                    <img src={driver} alt="driver" />
                </div>
            </Parallax>
            <Parallax translateY={["-100px", "200px"]}>
                <div className="content">
                    <h1 className='text-center text-5xl mb-4'>Get a Driver</h1>
                    <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                </div>
            </Parallax>
        </section>
        {/* end section 2 */}
        {/* start section 3 */}
        <section className="third-step flex justify-around items-center h-screen sticky top-0">
            <Parallax translateX={["-100px", "200px"]}>
                <div className="image p-28">
                    <img src={track} alt="track" />
                </div>
            </Parallax>
            <Parallax translateY={["-100px", "200px"]}>
                <div className="content">
                    <h1 className='text-center text-5xl mb-4'>Track your Driver</h1>
                    <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                </div>
            </Parallax>
        </section>
        {/* end section 3 */}
        {/* start section 4 */}
        <section className="fourth-step flex justify-around items-center h-screen sticky top-0">
            <Parallax translateX={["-100px", "200px"]}>
                <div className="image p-28">
                    <img src={safe} alt="safe" />
                </div>
            </Parallax>
            <Parallax translateY={["-100px", "200px"]}>
                <div className="content">
                    <h1 className='text-center text-5xl mb-4'>Arrive safely</h1>
                    <p className='text-center'>Curabitur ac quam aliquam urna vehicula semper sed vel elit. Sed et leo purus. Vivamus vitae sapien.</p>
                </div>
            </Parallax>
        </section>
        {/* end section 4 */}
    </article>
  )
}

export default Works