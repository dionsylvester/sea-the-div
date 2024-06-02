import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PageThree.css';

const PageThree = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundYone = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const backgroundYtwo = useTransform(scrollYProgress, [0, 1], ["0%", "75%"]);
    const backgroundYthree = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const backgroundYfour = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return(
    <>
        <div className='parallax-three' ref={ref}>
            <motion.p style={{ y: textY }} className='text-three'>Discover More Hidden Gem</motion.p>
            <motion.div style={{ y: backgroundYone }} className='layer_three_one'/>
            <motion.div style={{ y: backgroundYtwo }} className='layer_three_two' />
            <motion.div style={{ y: backgroundYthree }} className='layer_three_three'/>
            <motion.div style={{ y: backgroundYfour }} className='layer_three_four'/>
        </div>
    </>)
}

export default PageThree;