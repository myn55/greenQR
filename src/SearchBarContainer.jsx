import { useState } from 'react'
import './App.css'

export const SearchBarContainer = () => {
    return (
        <div class='SearchBarContainer'>
            <input type='text' placeholder="i.e. 'Windex Glass Cleaner'" className='SearchBar'/>
            <button>Search</button>
        </div>
    );
}