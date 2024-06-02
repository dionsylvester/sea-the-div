import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './PageOne.css';

const PageOne = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const backgroundYone = useTransform(scrollYProgress, [0, 1], ["0%", "83%"]);
    const backgroundYtwo = useTransform(scrollYProgress, [0, 1], ["0%", "67%"]);
    const backgroundYthree = useTransform(scrollYProgress, [0, 1], ["0%", "67%"]);
    const backgroundYfour = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const backgroundYfive = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const backgroundYsix = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "800%"]);

    return(
    <>
        <div className='parallax-one' ref={ref}>
            <motion.p style={{ y: textY }} className='text-one'>Sea The Div</motion.p>
            <motion.div style={{ y: backgroundYone }} className='layer_one_one'/>
            <motion.div style={{ y: backgroundYtwo }} className='layer_one_two' />
            <motion.div style={{ y: backgroundYthree }} className='layer_one_three'/>
            <motion.div style={{ y: backgroundYfour }} className='layer_one_four'/>
            <motion.div style={{ y: backgroundYfive }} className='layer_one_five'/>
            <motion.div style={{ y: backgroundYsix }} className='layer_one_six'/>
        </div>
    </>)
}

export default PageOne;