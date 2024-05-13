import React from 'react';
import img1 from '../../../assets/images/mission.png'
import img2 from '../../../assets/images/vision.png'
import 'aos/dist/aos.css';
import { motion } from "framer-motion";


const MissionAndVision = () => {

    return (
        <div >
            <h1 className='text-center pb-12 text-3xl md:text-4xl font-bold'>Mission & Vision</h1>
            <motion.div initial={{opacity:.7, scale:0.7, x: -300}} whileInView={{opacity:1, scale:1,x:0}} transition={{duration: 0.6}} viewport={{once:true}}  className='grid lg:grid-cols-2 items-center gap-6'>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#F6B17A]'>Our Mission</h1>
                    <p className='md:text-xl'>Our mission is to serve as the catalyst for transformative change by seamlessly connecting dedicated volunteers with impactful opportunities across diverse communities. We aim to empower individuals to channel their passion into purposeful action, fostering a culture of service and collaboration that drives positive social change.</p>
                </div>
                <div className='order-first lg:order-last'>
                    <img src={img1} alt="" />
                </div>
            </motion.div>

            <motion.div initial={{opacity:.7, scale:0.7, x: 300}} whileInView={{opacity:1, scale:1,x:0}} transition={{duration: 0.6}} viewport={{once:true}} className='grid lg:grid-cols-2 items-center mt-12 gap-6'>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl font-black pb-4 text-[#F6B17A]'>Our Vision</h1>
                    <p className='md:text-xl'>Our vision is to pioneer a global movement where volunteerism becomes synonymous with empowerment, empathy, and collective progress. We envision a future where every individual, regardless of background or circumstance, has access to meaningful opportunities to contribute their skills and compassion towards building resilient communities and a more equitable world.</p>
                </div>
            </motion.div>

        </div>
    );
};

export default MissionAndVision;