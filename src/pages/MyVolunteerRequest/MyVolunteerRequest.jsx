import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import baseUrl from '../../services/helper';
import { AuthContext } from '../../provider/AuthProvider';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const MyVolunteerRequest = () => {

    const {user} = useContext(AuthContext)

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(`${baseUrl}/myRequestedPosts?email=${user?.email}`,{ withCredentials: true })
        .then(res=>{
            setPosts(res.data)
        })
    },[user?.email])

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
                axios.delete(`${baseUrl}/myRequestedPosts/${id}`)
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

    if(posts.length < 1) {
        return(
            <div className='text-center mt-12'>
            <h1 className='text-red-500 font-bold text-5xl pb-24'>No Data Available</h1>
        </div>
        )
    }

    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12 mb-12">
            <Helmet>
                <title>volunnet | My Volunteer Request</title>
            </Helmet>
            <h1 className='text-center my-12 bg-base-200 text-3xl py-4 font-bold'>My Volunteer Request</h1>
               <div className={`md:grid-cols-2 gap-6 grid`}>
                {
                    posts.map(post => <div key={post._id} className="flex card shadow-lg animate__animated animate__zoomIn">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={post.image} className="max-w-[270px] rounded-lg shadow-2xl" />
                            <div>
                                <h1 className="text-xl font-bold pb-4 text-[#5BBCFF]">{post.title}</h1>
                                <div>
                                    <p className='text-[17px]'><span className='font-bold'>Deadline:</span> {post.deadline}</p>
                                    <p className='text-[17px]'><span className='font-bold'>Location:</span> {post.location}</p>
                                   <button onClick={()=>handleDeleteMyPost(post._id)} className='text-[18px] text-red-600 bg-[#ff737330] px-3 py-1 mt-2 rounded-md'>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyVolunteerRequest;