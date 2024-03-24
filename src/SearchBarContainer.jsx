import { useState } from 'react'
import searchIcon from './search_icon_w512.png'
import './App.css'

export const SearchBarContainer = () => {
    const [inputQuery, setInputQuery] = useState('')

    return (
        <div class='SearchBarContainer'>
            <input type='text' placeholder="i.e. 'Windex Glass Cleaner'"/>
            <div className='SearchBarSide'>
                <button className='SearchButton'>
                    <img src={searchIcon} alt='Search'/>
                </button>
            </div>
        </div>
    );
}