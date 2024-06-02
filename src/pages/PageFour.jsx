import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PageFour.css';

const PageFour = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundYone = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundYtwo = useTransform(scrollYProgress, [0, 1], ["0%", "67%"]);
    const backgroundYthree = useTransform(scrollYProgress, [0, 1], ["0%", "33%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);

    return(
    <>
        <div className='parallax-four' ref={ref}>
            <motion.p style={{ y: textY }} className='text-four'>Scroll again and wait~</motion.p>
            <motion.div style={{ y: backgroundYone }} className='layer_four_one'/>
            <motion.div style={{ y: backgroundYtwo }} className='layer_four_two' />
            <motion.div style={{ y: backgroundYthree }} className='layer_four_three'/>
        </div>
    </>)
}

export default PageFour;