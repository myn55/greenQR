import { motion } from 'framer-motion'
import './Backdrop.css'

export const Backdrop = ({onClick}) => {
    return (
        <motion.div
            className='Backdrop'
            onClick={onClick}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        </motion.div>
    )
}