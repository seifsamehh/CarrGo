import React from 'react'
import taxi2 from '../../images/taxi2.webp'
import { FcApproval } from "react-icons/fc";
import { Parallax } from 'react-scroll-parallax';
import './style/trust.css'

const Trust = _ => {
  return (
    <section className='trust flex justify-center items-center py-20'>
        <Parallax translateY={["-100px", "200px"]}>
            <div className="left-part ml-8">
                <h1 className='text-5xl font-bold'>Trusted Cab Services<br/> in the World</h1>
                <p className='my-6 leading-8'>Curabitur placerat cursus nisi nec pharetra. Proin quis tortor fringilla, placerat nisi nec, auctor ex. Donec commodo orci ac lectus mattis, sed interdum sem scelerisque.</p>
                <ul className='my-6'>
                    <li className='flex justify-start items-center gap-4'><FcApproval/> Cras justo odio</li>
                    <li className='flex justify-start items-center my-5 gap-4'><FcApproval/> Dapibus ac facilisis in</li>
                    <li className='flex justify-start items-center gap-4'><FcApproval/> Morbi leo risus</li>
                </ul>
                <button>
                    <span className="shadow"/>
                    <span className="edge"/>
                    <span className="front text"> Read More</span>
                </button>
            </div>
        </Parallax>
        <Parallax translateX={["400px", "-600px"]}>
            <div className="right-part">
                <img src={taxi2} alt="taxi two" />
            </div>
        </Parallax>
    </section>
  )
}

export default Trust