
import Banner from './banner/Banner';

import { useState } from 'react';

import { Helmet } from 'react-helmet';


const Home = () => {



    const [number, setNumber] = useState(6)

    const handleSeeMore = () => {
        setNumber(number + 3)
    }


    // console.log(loadedSubcategory);



    return (
        
        <div id='home-container' className='scroll-smooth'>
            <Helmet>
                <title>CraftoPia | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-sm px-6 md:max-w-3xl md:px-8 lg:max-w-7xl mx-auto lg:mt-12">

                {/* Craft Card Section */}
                {/* <div className='mt-12 md:mt-[100px]'>
                    <h1 className='text-center text-2xl md:text-4xl font-bold'>Craft Items</h1>
                    <p className='pt-3 pb-12 text-center'>Explore the world famous arts. Find your Choice</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch'>
                        {
                            loadedCrafts.slice(0, number).map((craft, index) => <HomeCraft key={index} craft={craft}></HomeCraft>)
                        }
                    </div>
                    {number < loadedCrafts.length && (
                        <div className='text-center mt-12'>
                            <button
                                onClick={handleSeeMore}
                                className="bg-[#65fa8f] duration-150 px-5 py-2 rounded-md text-xl text-[#000] hover:bg-[#98D8AA]"
                            >
                                See More
                            </button>
                        </div>
                    )}
                </div> */}
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
            </div>
        </div>
    );
};

export default Home;