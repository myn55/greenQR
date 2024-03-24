import { useState } from 'react'
import searchIcon from './/search_icon_w512.png'
import './SearchBarContainer.css'

export const SearchBarContainer = () => {
    const [inputQuery, setInputQuery] = useState('')

    const handleRequest = async () => {
        
    }

    return (
        <div class='SearchBarContainer'>
            <input type='text' placeholder="Input a product name to see its sustainability rating. i.e. 'Windex Glass Cleaner'"/>
            <div className='SearchBarSide'>
                <button className='SearchButton' onClick={handleRequest}>
                    <img src={searchIcon} alt='Search'/>
                </button>
            </div>
        </div>
    );
}