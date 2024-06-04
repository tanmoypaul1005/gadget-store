import React from 'react'
import { motion } from "framer-motion";

const BannerImage = ({src,alt}) => {
    return (
        <motion.div
            animate={{ x: 100 }}
            transition={{ delay: 1 }}
        >
            <img
                src={src}
                alt={alt}
                
                className={`duration-700 rounded-lg shadow-md w-full h-full`}
            />


        </motion.div>
    )
}

export default BannerImage