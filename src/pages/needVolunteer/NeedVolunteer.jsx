import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const NeedVolunteer = () => {
    const loadedPosts = useLoaderData()
    console.log(loadedPosts);
    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12 mb-12">
            <h1 className='text-center my-12 bg-base-200 text-3xl py-4 font-bold'>All Volunteer Posts</h1>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    loadedPosts.map(post => <div key={post._id} className="flex card shadow-lg ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={post.image} className="max-w-[270px] rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-xl font-bold pb-4 text-[#5BBCFF]">{post.title}</h1>
                                <div>
                                    <p className='text-[17px]'><span className='font-bold'>Deadline:</span> {post.deadline}</p>
                                    <p className='text-[17px]'><span className='font-bold'>Location:</span> {post.location}</p>
                                    <Link to={`/details/${post._id}`}><button className='bg-[#FDDE55] px-3 py-1 mt-2 rounded-md'>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NeedVolunteer;