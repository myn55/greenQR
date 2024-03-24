import { useState } from 'react'
import { motion } from 'framer-motion'
import './SearchResult.css'
import { InfoBlock } from './InfoBlock'

export const SearchResult = ({searchResult, key}) => {
    const [infoBlockOpen, setInfoBlockOpen] = useState(false)

    const close = () => {setInfoBlockOpen(false); console.log(infoBlockOpen)}
    const open = () => {setInfoBlockOpen(true); console.log(infoBlockOpen)}

    return (
        <div className='SearchResult'>
            <p>{key + '.' + searchResult.itemName}</p>
            <p>{searchResult.itemDesc}</p>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className='MoreInfoButton'
                onClick={() => infoBlockOpen ? close() : open()}
            >
                ?
            </motion.button>

            {infoBlockOpen && <InfoBlock searchResult={searchResult}/>}
        </div>
    )
}