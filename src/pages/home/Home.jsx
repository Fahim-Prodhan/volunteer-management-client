import { Helmet } from 'react-helmet';
import HeaderBanner from './HeaderBanner/HeaderBanner';
import { Link, useLoaderData } from 'react-router-dom';
import Post from './post/Post';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import CustomerReview from './customerReview/CustomerReview';
import MissionAndVision from './missionAndVision/MissionAndVision';


const Home = () => {

    const loadedPosts = useLoaderData();

    const {loading} = useContext(AuthContext)

    if (loading) {
        return <div className="flex justify-center"><span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span></div>
    }

    return (

        <div id='home-container' className='scroll-smooth'>
            <Helmet>
                <title>volunnet | Home</title>
            </Helmet>
            <HeaderBanner></HeaderBanner>
            <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">

                {/* Volunteer Needs Now Section */}
                <div className='mt-12 md:mt-[100px]'>
                    <h1 className='text-center text-2xl md:text-4xl font-bold'>Volunteer Needs Now</h1>
                    <p className='pt-3 pb-12 text-center'>Immediate volunteer needs: Help with meal prep, companionship for seniors, and community clean-ups. Make a difference now!</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                        {
                            loadedPosts.slice(0, 6).map((post, index) => <Post key={index} post={post}></Post>)
                        }
                    </div>
                    <div className='text-center mt-12'>
                        <Link to='/needVolunteer'>
                            <button className="bg-[#F6B17A] text-white duration-150 px-5 py-2 rounded-md text-xl hover:bg-[#ff9b4a]">
                                See All
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='mt-[100px]' >
                    {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>Art & Craft Categories</h1>
                    <p className='pt-3 pb-12 text-center'>Find Your Desire Design and arts filtering from subcategory</p>
                    <HomeSubcategories></HomeSubcategories> */}
                </div>

            </div>
            <div className='mt-[100px]' >
                {/* <h1 className='text-center text-2xl md:text-4xl font-bold'>Get the Best Painting</h1>
                <p className='pt-3 pb-8 text-center'>Celebrate EVERY moment with gifts from small shops!</p>
                <LottieComp></LottieComp> */}
            </div>

            <div className="mt-12 md:mt-[100px] max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">
                {/* <CustomerReview></CustomerReview> */}
                <MissionAndVision></MissionAndVision>
            </div>
            <div className="mt-12 md:mt-[100px] max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">
                {/* <CustomerReview></CustomerReview> */}
                <CustomerReview></CustomerReview>
            </div>
        </div>
    );
};

export default Home;