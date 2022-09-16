import React from 'react'
import blog1 from '../../images/blog-1.webp'
import blog2 from '../../images/blog-2.webp'
import blog3 from '../../images/blog-3.webp'
import './style/blog.css'

const Blog = _ => {
  return (
    <section className='blog py-12'>
        <div class="boxs flex justify-center items-center gap-5">
            <div className="box-1">
                <img src={blog1} alt="blog one"/>
                <h5>DISCUSS</h5>
                <a href="/" className='font-bold'>5 Things That You Need To Knows About E-Commerce</a>
                <p className='text-slate-500'>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                <h6>May 3rd, 2020, <span>by Admin</span></h6>
            </div>
            <div className="box-2">
                <img src={blog2} alt="second blog"/>
                <h5>DISCUSS</h5>
                <a href="/" className='font-bold'>5 Things That You Need To Knows About E-Commerce</a>
                <p className='text-slate-500'>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                <h6>May 3rd, 2020, <span>by Admin</span></h6>
            </div>
            <div className="box-3">
                <img src={blog3} alt="third blog"/>
                <h5>DISCUSS</h5>
                <a href="/" className='font-bold'>5 Things That You Need To Knows About E-Commerce</a>
                <p className='text-slate-500'>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                <h6>May 3rd, 2020, <span>by Admin</span></h6>
            </div>
        </div>
    </section>
  )
}

export default Blog