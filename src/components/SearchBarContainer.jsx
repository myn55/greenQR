import { useState } from 'react'
import { motion } from 'framer-motion'
import searchIcon from './/search_icon_w512.png'
import './SearchBarContainer.css'

export const SearchBarContainer = () => {
    const [input, setInput] = useState('');

    const handleRequest = async () => {
        
    }

    return (
        <div class='SearchBarContainer'>
            <input type='text' 
                placeholder="Input a product name to see its sustainability rating. i.e. 'Windex Glass Cleaner'"
                value={input}
                onChange={e => setInput(e.target.value)}/>
            <div className='SearchBarSide'>
                <motion.button 
                    className='SearchButton' onClick={handleRequest}>
                    <img src={searchIcon} alt='Search'/>
                </motion.button>
            </div>
        </div>
    );
}