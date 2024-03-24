import logo from './/grq_icon.png'
import './TitleContainer.css'

export const TitleContainer = () => {
    return (
        <span className='TitleContainer'>
          <img src={logo} className='TitleLogo'/>
          <span className='Title'>GreenQR</span>
        </span>    
    );
}