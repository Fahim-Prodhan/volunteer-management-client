import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ViewDetails = () => {
    const loadedPost = useLoaderData()
    const id = useParams()
    console.log(id);

    const handleBeVolunteer = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No more Volunteer need!",
        });
        return
    }

    return (
        <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto mt-4 lg:mt-12 mb-12">
            <div className='grid md:grid-cols-2 gap-12'>
                <div >
                    <div className='bg-base-200 p-8 mb-4'>
                        <img className='rounded-xl' src={loadedPost.image} alt="" />
                    </div>
                    <h1 className='text-3xl font-bold text-[#F6B17A]'>{loadedPost.title}</h1>
                    <h1 className='text-xl font-semibold'>#{loadedPost.category}</h1>
                </div>
                <div>
                    <p className='text-xl'><span className='font-bold'>Descriptions: </span> {loadedPost.description}</p>
                    <div className='my-4'>
                        <hr />
                    </div>
                    <p className='text-2xl text-[#FF204E]'><span className='font-bold'>Volunteer Need:</span> {loadedPost.volunteers_needed}</p>
                    <div className='my-4'>
                        <hr />
                    </div>

                    <div className='flex w-3/4 gap-8 flex-wrap'>
                        <p className='text-[18px]'><span className='font-bold'>Location:</span> {loadedPost.location}</p>
                        <p className='text-[18px]'><span className='font-bold'>Deadline:</span> {loadedPost.deadline}</p>
                        <p className='text-[18px]'><span className='font-bold'>Organizer Name:</span> {loadedPost.name}</p>
                    </div>
                    {!loadedPost.volunteers_needed < 1 ? (
                        <Link to={`/be-volunteer/${id.id}`}>
                            <button className="btn bg-[#424769] text-white mt-8">Be Volunteer</button>
                        </Link>
                    ) : (
                        <button onClick={handleBeVolunteer} className="btn bg-[#424769]  text-whitemt-8">Be Volunteer</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;