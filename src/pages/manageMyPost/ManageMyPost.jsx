import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../services/helper';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ManageMyPost = () => {

    const { user } = useContext(AuthContext)
    const [myPosts, setMyPosts] = useState([])
    const [myRequestedPosts, setMyRequestedPosts] = useState([])
    const [posts, setPosts] = useState([])
    const [active, setActive] = useState(true)
    const [loadingData, setLoadingData] = useState(false)

    useEffect(() => {
        setLoadingData(true)
        axios.get(`${baseUrl}/myPosts?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyPosts(res.data)
                setPosts(res.data)
                setLoadingData(false)
            })

        axios.get(`${baseUrl}/myRequestedPosts?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyRequestedPosts(res.data)
            setLoadingData(false)

            })
    }, [user?.email])

    const handleMyPost = () => {
        setActive(true)
        setPosts(myPosts)
    }

    const handleMyRequestedPost = () => {
        setActive(false)
        setPosts(myRequestedPosts)
    };

    const handleDeleteMyPost = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`${baseUrl}/myPosts/${id}?email=${user?.email}`, {withCredentials:true})
                    .then(res => {
                        if (res.data.deletedCount === 1) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            // Remove from UI
                            const remainingData = posts.filter(p => p._id != id)
                            setPosts(remainingData)
                            setTimeout(() => {
                                window.location.reload() 
                            }, 1000);
                        }
                    })
            }
        });

    }

    console.log(posts);

   

    if (posts.length < 1) {
        if (loadingData) {
            return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-sm"></span>
                <span className="loading loading-ring loading-md"></span>
                <span className="loading loading-ring loading-lg"></span></div>
        }
        return (
            <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto mt-5 mb-12">
                <Helmet>
                    <title>volunnet | Manage Post</title>
                </Helmet>
                <h1 className='font-bold text-3xl text-center pb-12'>Manage Your Posts</h1>
                <div className='grid justify-center'>
                    <div role="tablist" className="tabs tabs-lifted tabs-sm lg:tabs-lg">
                        <a onClick={handleMyPost} role="tab" className={`tab ${active ? 'tab-active' : ''}`}> My Need Volunteer Post</a>
                        <a onClick={handleMyRequestedPost} role="tab" className={`tab ${!active ? 'tab-active' : ''}`}>My Volunteer Request Post</a>
                    </div>
                </div>
                <div className='text-center mt-12'>
                    <h1 className='text-red-500 font-bold text-5xl pb-24'>No Data Available</h1>
                </div>
            </div>
        )
    }

    console.log(posts.length);


    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-6 mb-12">
            <Helmet>
                <title>volunnet | Manage Post</title>
            </Helmet>
            <h1 className='font-bold text-3xl text-center pb-12'>Manage Your Posts</h1>
            <div className='grid justify-center'>
                <div role="tablist" className="tabs tabs-lifted tabs-sm lg:tabs-lg">
                    <a onClick={handleMyPost} role="tab" className={`tab ${active ? 'tab-active' : ''}`}> My Need Volunteer Post</a>
                    <a onClick={handleMyRequestedPost} role="tab" className={`tab ${!active ? 'tab-active' : ''}`}>My Volunteer Request Post</a>
                </div>
            </div>
            <div className='mt-12'>
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
                                posts.map((post) =>
                                    <tr className='animate__animated animate__zoomIn' key={post._id}>
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
                                            <div className="font-bold text-[#7077A1]">{post.title}</div>
                                        </td>
                                        <td>
                                            {post.category}
                                        </td>
                                        <td>
                                            {post.location}
                                        </td>
                                        <td>{post.deadline}</td>
                                        <th>
                                            {
                                                active && <div className='flex gap-4 text-2xl'>
                                                    <Link to={`/updatePost/${post._id}`}>
                                                        <FaEdit className='text-blue-600 cursor-pointer'></FaEdit>
                                                    </Link>
                                                    <MdDelete onClick={() => handleDeleteMyPost(post._id)} className='text-red-600 cursor-pointer'></MdDelete>
                                                </div>
                                            }

                                            {
                                                !active && <div className='flex gap-4'>
                                                    <button onClick={() => handleDeleteMyPost(post._id)} className='text-red-600 bg-[#ff737330] cursor-pointer px-3 py-1 rounded-md'> Cancel</button>
                                                </div>
                                            }
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

export default ManageMyPost;