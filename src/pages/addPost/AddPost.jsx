import React, { useContext, useState } from "react";
import baseUrl from "../../services/helper";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const AddPost = () => {

    const { user } = useContext(AuthContext);

    const [startDate, setStartDate] = useState(new Date());
    const date = new Date(startDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because January is 0
    const year = date.getFullYear();

    // Construct the formatted date string
    const deadline = `${year}-${month}-${day}`;

    const handleAddPost = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const description = form.description.value;
        const category = form.category.value;
        const location = form.location.value;
        const volunteers_needed = parseInt(form.volunteers_needed.value);
        const email = form.email.value;
        const name = form.name.value;

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

        };

        axios.post(`${baseUrl}/volunteerPost?email=${user?.email}`, formValues, {withCredentials:true})
        .then(res=>{
            if (res.data.insertedId) {
                      Swal.fire({
                        title: "Good job!",
                        text: "Post is Published!",
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
                <title>volunnet | Add Post</title>
            </Helmet>
            <div className="bg-[#cbcbcb6b] lg:px-28 md:py-16 text-center rounded-2xl">
                <h1 className="font-semibold text-[#F6B17A] pt-4 text-3xl md:text-5xl px-2">
                    Add Volunteer Post
                </h1>

                <form onSubmit={handleAddPost} className="card-body ">
                    <div className="md:grid md:grid-cols-2 gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    Thumbnail
                                </span>
                            </label>
                            <input
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
                            <select name="category" className="select select-bordered w-full">
                                <option>healthcare</option>
                                <option>education</option>
                                <option>social service</option>
                                <option>animal welfare</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                    location
                                </span>
                            </label>
                            <input
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
                            <DatePicker className="w-full py-3 rounded-lg px-4" selected={startDate} onChange={(date) => setStartDate(date)} > </DatePicker>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className=" text-[14px] font-semibold label-text">
                                . Organizer Email
                                </span>
                            </label>
                            <input
                                value={user?.email}
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
                                value={user?.displayName}
                                type="text"
                                name="name"
                                placeholder="Enter User Name"
                                className="input "
                                required
                            />
                        </div>



                        <div className="form-control mt-6 col-span-2">
                            <button type="submit" className="btn border-0 bg-[#7077A1] hover:bg-[#424769] text-white">
                                Add
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
