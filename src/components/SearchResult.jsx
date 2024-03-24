import { useState } from 'react'
import { motion } from 'framer-motion'
import './SearchResult.css'
import { InfoBlock } from './InfoBlock'
import { ReactDOM } from 'react'

export const SearchResult = ({searchResult, key}) => {
    const [infoBlockOpen, setInfoBlockOpen] = useState(false)

    const close = () => {setInfoBlockOpen(false); console.log(infoBlockOpen)}
    const open = () => {setInfoBlockOpen(true); console.log(infoBlockOpen)}

    return (
        <div className='SearchResult'>
            <p><a href={searchResult.esgLink}>{searchResult.itemName}</a></p>
            <p>{searchResult.itemDesc}</p>
            <hr></hr>
            <p>{'Brand: ' + (searchResult.brandName || 'none specified')}</p>
            <p>{'ESG Score: ' + searchResult.esgScore}</p>
            <motion.button
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className='MoreInfoButton'
                onClick={() => infoBlockOpen ? close() : open()}
            >
                ?
            </motion.button>
        </div>
    )
}