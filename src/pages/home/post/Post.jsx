import { Link } from 'react-router-dom';
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
        <div data-aos="zoom-in" data-aos-duration="800">
             <div className="card md:min-h-[524px] bg-base-100 shadow-xl">
                <figure className='p-4 '><img className='rounded-lg  w-full' src={image} alt="Shoes" /></figure>
                <div className="card-body pt-4">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className='-mt-2 pb-3 font-rancho font-semibold text-[#FF6D60]'>#{category}</p>
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
                        <Link to={`/details/${_id}`}> <button className='btn bg-[#FDDE55] w-full'>View Details</button> </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Post;