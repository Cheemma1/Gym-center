import { CheckCircle } from 'phosphor-react'
import boxImg1 from '../assets/Rectangle 1.png'
import boxImg2 from '../assets/Rectangle 2.png'
import boxImg3 from '../assets/Rectangle 4.png'
const Transform = () => {
  return (
    <>
    <div className="transform-container">
<div className="image-container">
<img src={boxImg1} alt="" className='boximg1' />
<img src={boxImg2} alt="" className='boximg2' />
<img src={boxImg3} alt="" className='boximg3' />
</div>

<div className="list-container">
<h2>Transform your physique with our fitness plan.</h2>
<div>

    <li> <CheckCircle color='#097fd9'
    weight='fill'/>Increase Muscle and Strength</li>
    <li>  <CheckCircle color='#097fd9'
    weight='fill'/>Be Healthier than before</li>
    <li>  <CheckCircle color='#097fd9'
    weight='fill'/>Increase Stamina</li>
</div>
<div className='transform-btn'>
    <button className='blue-btn'>Join now</button>
    <button className='white-btn'>Contact us</button>
</div>
</div>
    </div>
    <div className="joinnow">
<h3>Enhance user experience with healthy nutrition tips, <br /> support resources, and social elements.</h3>
<button className='join-btn'>Join now</button>
    </div>
    </>
  )
}

export default Transform