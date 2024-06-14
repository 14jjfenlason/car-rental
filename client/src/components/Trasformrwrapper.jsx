import React from 'react'
import { motion } from "framer-motion";


export default function Trasformrwrapper({children, size}) {
  return (
    <motion.div
        whileHover={{ scale: size}}
        onHoverStart={(e) => {}}
        onHoverEnd={(e) => {}}
        
      >
        {children}
      </motion.div>  
      )
}
