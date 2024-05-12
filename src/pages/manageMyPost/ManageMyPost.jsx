import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../services/helper';
import { AuthContext } from '../../provider/AuthProvider';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageMyPost = () => {

    const { user } = useContext(AuthContext)
    const [myPosts, setMyPosts] = useState([])
    const [myRequestedPosts, setMyRequestedPosts] = useState([])
    const [posts, setPosts] = useState([])
    const [active, setActive] = useState(true)

    useEffect(() => {
        axios.get(`${baseUrl}/myPosts?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyPosts(res.data)
                setPosts(res.data)
            })

        axios.get(`${baseUrl}/myRequestedPosts?email=${user?.email}`, { withCredentials: true })
            .then(res => {
                setMyRequestedPosts(res.data)
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
                axios.delete(`${baseUrl}/myPosts/${id}`)
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
                        }
                    })
            }
        });

    }

    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12 mb-12">
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