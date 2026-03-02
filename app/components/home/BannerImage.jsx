import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";

const BannerImage = ({src,alt}) => {
    return (
        <motion.div
            animate={{ x: 100 }}
            transition={{ delay: 1 }}
        >
            <Image
                src={src}
                alt={alt}
                width={1920}
                height={1080}
                className={`duration-700 rounded-lg shadow-md w-full h-full`}
            />


        </motion.div>
    )
}

export default BannerImage