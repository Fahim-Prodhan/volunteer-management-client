import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

import 'aos/dist/aos.css';

const Post = ({post}) => {

    const {
        _id,
        image,
        title,
        category,
        deadline
    } = post


    return (
        <motion.div initial={{opacity:.7, scale:0.7}} whileInView={{opacity:1, scale:1}} transition={{duration: 0.6}} viewport={{once:true}}>
             <div className="card md:min-h-[524px] bg-base-100 shadow-xl">
                <figure className='p-4 '><img className='rounded-lg  w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body pt-4">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className='-mt-2 pb-3 font-rancho font-semibold text-[#F6B17A]'>#{category}</p>
                    <div>
                        <hr />
                    </div>
                    <div className='flex justify-between my-2'>
                        <p><span className='font-semibold'>Deadline:</span> {deadline}</p>
                        
                    </div>
                    <div>
                        <hr />
                    </div>                 
                    <div className='items-center mt-6'>
                        <Link to={`/details/${_id}`}> <button className='btn bg-[#7077A1] hover:bg-[#424769] w-full text-white'>View Details</button> </Link>
                    </div>
                    
                </div>
            </div>
        </motion.div>
    );
};

export default Post;