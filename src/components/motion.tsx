import { motion } from 'framer-motion';

const Motion = () => {
    return (
        <motion.div
            initial={{backgroundColor: '#f00', opacity: 0}}
            whileInView={{backgroundColor: '#0f0', opacity: 1, transition: {duration: 2, ease: 'easeInOut'}}}
            // animate={{
            //     scale: 2,
            //     transition: {duration: 2}
            // }}
            whileHover={{translateX: -50, transition: {duration: 1, ease: 'easeInOut'}}}
            whileTap={{scale: .95}}
            className='w-24 h-24 bg-red-200 rounded-lg shadow-lg flex justify-center items-center'
        >
            Motion
        </motion.div>
    )
}

export default Motion