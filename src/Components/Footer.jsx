import { Copyright, FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import logo from '../assets/Logo.svg'

const Footer = () => {
  return (
    <>
    <footer>
        <div>
    <div className='footer-txt'>
<img src={logo} alt="" />
<h1>Gym Center</h1>
</div>
<p>Highlight benefits of each exercise, both physical and mental</p>
</div>
<div className="footer-right">
 <div>
    <h2>Site map</h2>
    <li>About Us</li>
    <li>Promo</li>
    <li>News & Blog</li>
    <li>Help Center</li>
 </div>

  <div>
    <h2>Support</h2>
    <li>Faq</li>
    <li>Support Center</li>
    
 </div>
  <div>
    <h2>Social Media</h2>
    <span style={{display:'flex',
  gap:'0.5rem'}}>
    <InstagramLogo weight='fill'/>
  <FacebookLogo weight='fill'/>
  <TwitterLogo weight='fill'/></span>
 </div>

</div>

    </footer>
     <div className="line"></div>
    <div className='footer-flex'>
       
        <div className='footer-last1'> <Copyright/><p>2023 Fitness Center</p></div>
        <div className='footer-last'>
            <p>Term of Use</p>
            <p>Privacy Policy</p>
        </div>
    </div>
    </>
  )
}

export default Footer