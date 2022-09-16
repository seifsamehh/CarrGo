import React from 'react'
import { AiFillSetting, AiFillCar } from "react-icons/ai";
import { FaHome,FaInfoCircle } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";
import { HiDocumentText } from "react-icons/hi";
import { MdPermContactCalendar, MdKeyboardArrowDown } from "react-icons/md";
import './style/sub-header.css'

const SubHeader = _ => {
  return (
    <div className='sub-header flex justify-between items-center p-4 gap-4'>
        <div className="left-part">
            <nav className='flex justify-center items-center gap-4'>
                <a href="#" className="link link--elara dropdown active">
                    <span className='flex items-center gap-2' tabIndex={0}><FaHome/> HOME <MdKeyboardArrowDown/></span>
                    <ul tabIndex={0} className="dropdown-content menu p-2 mt-4 shadow rounded-box w-52">
                        <li><a>Home 1</a></li>
                        <li><a>Home 2</a></li>
                    </ul>
                </a>
                <a href="/" className="link link--elara">
                    <span className='flex items-center gap-2'><FaInfoCircle/> ABOUT</span>
                </a>
                <a href="/" className="link link--elara">
                    <span className='flex items-center gap-2'><AiFillSetting/> OUR SERVICES</span>
                </a>
                <a href="/" className="link link--elara">
                    <span className='flex items-center gap-2'><AiFillCar/> OUR VEHICLES</span>
                </a>
                <a href="/" className="link link--elara">
                    <span className='flex items-center gap-2'><FiPackage/> PACKAGES</span>
                </a>
                <a href="#" className="link link--elara dropdown">
                    <span className='flex items-center gap-2' tabIndex={0}><HiDocumentText/> BLOG <MdKeyboardArrowDown/></span>
                    <ul tabIndex={0} className="dropdown-content menu p-2 mt-4 shadow rounded-box w-52">
                        <li><a>Page 1</a></li>
                        <li><a>Page 2</a></li>
                    </ul>
                </a>
                <a href="/" className="link link--elara">
                    <span className='flex items-center gap-2'><MdPermContactCalendar/> CONTACT</span>
                </a>
            </nav>
        </div>
        <div className="right-part">
            <button>
                <span className="shadow"/>
                <span className="edge"/>
                <span className="front text"> Get Started</span>
            </button>
        </div>
    </div>
  )
}

export default SubHeader