import React , {useState, useEffect} from 'react'
import { motion } from "framer-motion"
import AnimatedCursor from "react-animated-cursor"
import './App.css'
import { Blog, Carousel, Download, Feedback, Footer, Header, SubFooter, SubHeader, Trust, Works } from './components';

const App = _ => {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  // loading
  const [loading , setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])
  return (
    <>
    <AnimatedCursor
      innerSize={11}
      outerSize={11}
      color='0, 0, 0'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5} 
    />
    {
      loading?
      <div className="loading w-screen h-screen flex justify-center items-center flex-col gap-6">
        <div className="loader">
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
          <div className="loader-square"></div>
        </div>
        <div className="load">
          <div className="scanner">
            <h1>CarrGo...</h1>
          </div>
        </div>
      </div>
      :
      <>
      <main className='absolute inset-0'>
        <motion.div
        className="absolute z-50 w-full bg-amber-500"
        initial="initial"
        animate="animate"
        variants={blackBox}>
        </motion.div>
        <Header/>
        <SubHeader/>
        <Carousel/>
        <Works/>
        <Trust/>
        <Download/>
        <Feedback/>
        <Blog/>
        <Footer/>
        <SubFooter/>
      </main>
      </>
    }
    </>
  )
}

export default App
