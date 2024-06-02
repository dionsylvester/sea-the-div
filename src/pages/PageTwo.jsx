import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PageTwo.css';

const PageTwo = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundYone = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const backgroundYtwo = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
    const backgroundYthree = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

    return(
    <>
        <div className='parallax-two' ref={ref}>
            <motion.p style={{ y: textY }} className='text-two'>Look... The Other Side of the Mountain</motion.p>
            <motion.div style={{ y: backgroundYone }} className='layer_two_one' />
            <motion.div style={{ y: backgroundYtwo }} className='layer_two_two' />
            <motion.div style={{ y: backgroundYthree }} className='layer_two_three'/>
        </div>
    </>)
}

export default PageTwo;