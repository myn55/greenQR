import { useState } from 'react'
import { motion } from 'framer-motion'
import searchIcon from './/search_icon_w512.png'
import './SearchBarContainer.css'

export const SearchBarContainer = ({setSearchResults}) => {
    const nonEmptyRegex = /[^\s]+/
    const [input, setInput] = useState('');

    // Fetch possible items from the database
    const handleRequest = async () => {
        if (!nonEmptyRegex.test(input)) {
            alert('You must enter a valid query.')
            setInput('')
            return
        }

        const resp = await fetch(
            `http://localhost:5000/search?q=${input}`, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).catch(e => console.error(e))

        const items = await resp.json()
        setSearchResults(items)
    }

    return (
        <div class='SearchBarContainer'>
            <input type='text' 
                placeholder="Input a product name to see its sustainability rating. i.e. 'Cleaning Wipes'"
                value={input}
                onChange={e => {setInput(e.target.value)}}
            />
            <div className='SearchBarSide'>
                <motion.button 
                    whileHover={{scale: 1.1}}
                    className='SearchButton' 
                    onClick={handleRequest}
                >
                    <img src={searchIcon} alt='Search'/>
                </motion.button>
            </div>
        </div>
    );
}