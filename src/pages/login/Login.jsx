/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import auth from "../../firebase/firebase.config";
import logo from '../../assets/images/logo blue.png'
import { TiTick } from "react-icons/ti";

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const location = useLocation();
    const navigate = useNavigate()

    const [eye, setEye] = useState(false)

    const togglePassword = () => {
        setEye(!eye)
    }


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(() => {
                // console.log(res.user);
                toast.success("Login Successful", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '200px', height: '70px' },
                });
                if (location.state == '/update-profile') {
                    navigate('/')
                } else {
                    navigate(location.state ? `${location.state}` : '/')
                }

                // console.log(location.state);

            })
            .catch(error => {
                toast.error("Something is went wrong", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '200px', height: '70px' },
                });
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(() => {
                // console.log(res.user);
                toast.success("Login Successful", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '250px', height: '70px' },
                });
                if (location.state == '/update-profile') {
                    navigate('/')
                } else {
                    navigate(location.state ? `${location.state}` : '/')
                }
            })
            .catch(error => {
                toast.error("Something is went wrong", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '250px', height: '70px' },
                });

                console.log(error);
            })
    }


    const handleSingInUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        signInUser(email, password)
            .then(() => {
                // console.log(res.user);
                toast.success("Login Successful", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '250px', height: '70px' },
                });
                if (location.state == '/update-profile') {
                    navigate('/')
                } else {
                    navigate(location.state ? `${location.state}` : '/')
                }
            })
            .catch(error => {
                toast.error("Something is went wrong", {
                    position: "top-right",
                    duration: 5000,
                    style: { width: '250px', height: '70px' },
                });
                console.log(error);
            })
    }


    return (
        <div className='max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12'>
            <Helmet>
                <title>volunnet | Login</title>
            </Helmet>
            <div className="relative md:top-10">
                <div className="grid md:grid-cols-2 gap-7">
                    <div className="lg:py-0 py-4 ">
                        <div className='flex justify-center lg:justify-start my-6'>
                            <img className='lg:w-[40%] w-1/2' src={logo} alt="" />
                        </div>
                        <div >
                            <h1 className='font-bold text-xl md:text-3xl lg:text-4xl text-center lg:text-left'>Login your Volunnet account</h1>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Create a post to find volunteer in minutes</p>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Work as volunteer with any org</p>
                            <p className='flex items-center gap-1 my-4 lg:text-xl'><span className='text-2xl text-[#68D2E8]'><TiTick /></span>Join us in shaping a brighter tomorrow!</p>
                        </div>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSingInUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 label">
                                    <input name="password" type={eye ? "text" : "password"} className="grow" placeholder="Password" />
                                    <span onClick={togglePassword} className="text-xl -ml-10 md:-ml-0">{eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}</span>
                                </label>
                                <label className="label">
                                    <p className="pt-2 text-sm">Don't Have any account? <span className="text-blue-400"><Link to='/register'>Register</Link></span></p>
                                </label>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-[#FF6D60] text-white">Login</button>
                                </div>
                                <div className="divider"> sign in with</div>
                                <div className="flex justify-center gap-6">
                                    <button type="button" onClick={handleGoogleSignIn} className="text-4xl"><FcGoogle /></button>
                                    <button type="button" onClick={handleGithubSignIn} className="text-4xl"><FaGithub /></button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;