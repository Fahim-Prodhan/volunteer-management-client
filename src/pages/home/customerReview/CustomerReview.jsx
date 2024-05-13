/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const CustomerReview = () => {

    return (
        <div className="pb-12">
            <h1 className="font-bold text-2xl md:text-4xl text-center pb-8">Volunteer Experiences</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="card card-side bg-base-100 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/wz1Ttmv/young-handsome-man-beard-volunteering-260nw-1799591284.webp" />
                            </div>
                        </div>
                        <h2 className="card-title">Clarissa Muir</h2>
                        <p className="text-[10px] ">MARCH 15, 2021</p>
                        <p>Volunteering at the local soup kitchen has been eye-opening. Interacting with guests from all walks of life has taught me empathy and the power of a warm meal. Every smile exchanged or story shared reminds me of the importance of community and giving back.</p>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className="card card-side bg-base-100 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/71MnSnq/featured-individual-volunteer.jpg" />
                            </div>
                        </div>
                        <h2 className="card-title">Aimee Bradshaw</h2>
                        <p className="text-[10px] ">APRIL 4, 2022</p>
                        <p>Spending time with elderly residents at the nursing home has been incredibly rewarding. Listening to their stories, playing games brings so much joy to their lives and mine. This experience has taught me the value of cherishing every moment and the significance of human connection.</p>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="card card-side bg-base-100 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/4KBGLTQ/4.png" />
                            </div>
                        </div>
                        <h2 className="card-title">Lukasz Mitchell</h2>
                        <p className="text-[10px]">JULY 7, 2021</p>
                        <p> Joining environmental cleanup efforts in my community has been empowering. Whether it's picking up litter in parks or participating in beach cleanups, every action feels like a step towards a cleaner. Being part of a team working towards a common goal has taught me the importance of collective action.</p>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}  className="card card-side bg-base-100 shadow-xl cursor-pointer">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img src="https://i.ibb.co/RCTyXkV/shutterstock-2346359623.webp" />
                            </div>
                        </div>
                        <h2 className="card-title">Angliona</h2>
                        <p className="text-[10px]">JULY 1, 2023</p>
                        <p>Volunteering as a youth mentor has been incredibly fulfilling. Guiding and supporting young individuals as they navigate challenges and pursue their goals has been a privilege. Watching them grow, gain confidence, and realize their potential reinforces the importance of mentorship and investing in the next generation.</p>
                    </div>
                </motion.div>

            </div>

        </div>
    );
};

export default CustomerReview;