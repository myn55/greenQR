import logo from './grq_icon512.png'
import './TitleContainer.css'

export const TitleContainer = () => {
    return (
        <span className='TitleContainer'>
          <img src={logo} alt="GreenQR Logo" className='TitleLogo'/>
          <span className='Title'>GreenQR</span>
        </span>    
    );
}