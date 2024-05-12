import React, { useContext, useState } from "react";
import baseUrl from "../../services/helper";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

const BeAVolunteer = () => {

    const loadedPost = useLoaderData()

    const { user } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());
    const date = new Date(startDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because January is 0
    const year = date.getFullYear();

    // Construct the formatted date string
    const deadline = `${year}-${month}-${day}`;

    const handleAddCraft = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteers_needed = form.volunteers_needed.value;
        const email = form.email.value;
        const name = form.name.value;
        const suggestion = form.suggestion.value;
        const volunteer_email = form.volunteer_email.value;
        const volunteer_name = form.volunteer_name.value;
        const status = form.status.value;


        const formValues = {
            image,
            title,
            description,
            category,
            location,
            volunteers_needed,
            deadline,
            email,
            name,
            suggestion,
            volunteer_email,
            volunteer_name,
            status

        };

        axios.post(`${baseUrl}/beVolunteerPost/${loadedPost._id}`, formValues)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Add Volunteer Request!",
                        icon: "success",
                    });

                    form.reset();
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }
            })
    };

    return (
        <div className="mb-12 max-w-sm px-6 md:max-w-3xl lg:px-8 lg:max-w-6xl mx-auto mt-6 lg:mt-12">
            <Helmet>
                <title>volunnet | Be Volunteer Post</title>
            </Helmet>
            <div className="bg-[#eee] lg:px-28 md:py-16 text-center rounded-2xl">
                <h1 className="font-semibold text-[#03AED2] pt-4 text-3xl md:text-5xl px-2">
                    Be A Volunteer
                </h1>

                <form onSubmit={handleAddCraft} className="card-body ">
                    <div className="md:grid md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Thumbnail
                                </span>
                            </label>
                            <input
                                value={loadedPost.image}
                                type="text"
                                name="image"
                                placeholder="Enter Image Url"
                                className="input"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Title
                                </span>
                            </label>
                            <input
                                value={loadedPost.title}
                                type="text"
                                name="title"
                                placeholder="Enter Item Name"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control col-span-2">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Description
                                </span>
                            </label>
                            <textarea
                                value={loadedPost.description}
                                type="text"
                                name="description"
                                placeholder="Enter Short Description"
                                className="input "
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Category
                                </span>
                            </label>
                            <input type="text" name="category" value={loadedPost.category} className="select select-bordered w-full">
                            </input>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    location
                                </span>
                            </label>
                            <input
                                value={loadedPost.location}
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Volunteers Needed
                                </span>
                            </label>
                            <input
                                value={loadedPost.volunteers_needed}
                                type="number"
                                name="volunteers_needed"
                                placeholder="Enter volunteer Number"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Deadline
                                </span>
                            </label>
                            <DatePicker value={loadedPost.deadline} className="w-full py-3 rounded-lg px-4" selected={startDate} onChange={(date) => setStartDate(date)} > </DatePicker>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Organizer Email
                                </span>
                            </label>
                            <input
                                value={loadedPost.email}
                                type="text"
                                name="email"
                                placeholder="Enter User Email"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Organizer name
                                </span>
                            </label>
                            <input
                                value={loadedPost.name}
                                type="text"
                                name="name"
                                placeholder="Enter User Name"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Volunteer Email
                                </span>
                            </label>
                            <input
                                value={user?.email}
                                type="text"
                                name="volunteer_email"
                                placeholder="Enter User Email"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Volunteer name
                                </span>
                            </label>
                            <input
                                value={user?.displayName}
                                type="text"
                                name="volunteer_name"
                                placeholder="Enter User Name"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Suggestion
                                </span>
                            </label>
                            <textarea
                                type="text"
                                name="suggestion"
                                placeholder="Write suggestion"
                                className="input "
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Status
                                </span>
                            </label>
                            <input
                                value={"Requested"}
                                type="text"
                                name="status"
                                placeholder="Enter User Name"
                                className="input "
                                required
                            />
                        </div>

                        <div className="form-control mt-6 col-span-2">
                            <button type="submit" className="btn bg-[#03AED2] text-white">
                                Request
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BeAVolunteer;
