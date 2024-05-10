import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { IoGridSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const NeedVolunteer = () => {
    const loadedPosts = useLoaderData()
    const [GridActive, setGridActive] = useState(true)
    const [TableActive, setTableActive] = useState(false)

    const handleGrid = () => {
        setGridActive(true)
        setTableActive(false)
    }

    const handleTable = () => {
        setGridActive(false)
        setTableActive(true)
    }

    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12 mb-12">
            <h1 className='text-center my-12 bg-base-200 text-3xl py-4 font-bold'>All Volunteer Posts</h1>
            <div className='flex my-4 gap-4'>
                <button onClick={handleGrid} className='btn text-2xl'><IoGridSharp /></button>
                <button onClick={handleTable} className='btn text-2xl'><GiHamburgerMenu /></button>
            </div>
            <div className={`md:grid-cols-2 gap-6 ${GridActive ? 'grid' : 'hidden'}`}>
                {
                    loadedPosts.map(post => <div key={post._id} className="flex card shadow-lg ">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={post.image} className="max-w-[270px] rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-xl font-bold pb-4 text-[#5BBCFF]">{post.title}</h1>
                                <div>
                                    <p className='text-[17px]'><span className='font-bold'>Deadline:</span> {post.deadline}</p>
                                    <p className='text-[17px]'><span className='font-bold'>Location:</span> {post.location}</p>
                                    <Link to={`/details/${post._id}`}><button className='text-[18px] bg-[#FDDE55] px-3 py-1 mt-2 rounded-md'>View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            <div className={`${TableActive ? 'grid' : 'hidden'}`}>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Location</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                loadedPosts.map(post =>
                                    <tr key={post._id}>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={post.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="font-bold text-[#5BBCFF]">{post.title}</div>
                                        </td>
                                        <td>
                                            {post.category}
                                        </td>
                                        <td>
                                            {post.location}
                                        </td>
                                        <td>{post.deadline}</td>
                                        <th>
                                            <button className="btn bg-[#FDDE55]">View Details</button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default NeedVolunteer;