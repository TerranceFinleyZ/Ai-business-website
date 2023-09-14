import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';
import { Button } from './Button';
import { GrGraphQl } from "react-icons/gr";

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
        Make a Average of $65,800 to $95,559 with AI. 
        </p>
        <p className="footer-subscription-text">
          you can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input" />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>  
      </section>
      <div className="footer-links">
       <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h8>About Us</h8>
          <Link to='/sign-up'>How it works</Link>
          <Link to='/sign-up'>Testimonial</Link>
          <Link to='/sign-up'>Careers</Link>
          <Link to='/sign-up'>Investors</Link>
          <Link to='/sign-up'>Terms of Service</Link>
        </div>
        <div className="footer-link-items">
          <h8>Contact Us</h8>
          <Link to='/sign-up'>Contact</Link>
          <Link to='/sign-up'>Support</Link>
          <Link to='/sign-up'>Destination</Link>
          <Link to='/sign-up'>Sponsorships</Link>
        </div>
        <div className="footer-link-items">
          <h8>AI</h8>
          <Link to='/sign-up'>Submit Video</Link>
          <Link to='/sign-up'>Ambassadors</Link>
          <Link to='/sign-up'>Agency</Link>
          <Link to='/sign-up'>Influencers</Link>
        </div>
        <div className="footer-link-items">
          <h8>Social Media</h8>
          <Link to='/sign-up'>Instagram</Link>
          <Link to='/sign-up'>Facebook</Link>
          <Link to='/sign-up'>Youtube</Link>
          <Link to='/sign-up'>Twitter</Link>
          </div>
      </div>
        <section className="social-media">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to='/' className="social-logo">
            Imperial <GrGraphQl/> <i className='fab fa-typo3' />
          </Link>
        </div>
        <small className='website-rights'> © 2023  Terrance Finley</small>
        <div className='social-icons'>
          <Link
            className='social-icon-link facebook'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f' />
          </Link>
          <Link
            className='social-icon-link youtube'
            to='/'
            target='_blank'
            aria-label='Foutube'
          >
            <i className='fab fa-youtube' />
          </Link>
          <Link
            className='social-icon-link twitter'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link>
          <Link
            className='social-icon-link linkedin'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </Link>
           </div>
         </div>
        </section>
      </div>
    </div>
  );
}

export default Footer
