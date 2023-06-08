import useMediaQuery from "../hooks/useMediaQuery"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"
import { Socials } from "./Socials"

function Home({ setCurrentPage }) {
    //using custom hook to determine if screen size is above or below 1060px
    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section
            id="home"
            className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
        >   
            {/* IMAGE SECTION  */}
            <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
                {aboveMediumScreens ? (
                    /* for screens above medium, there will be a blue square border behind the profile image */
                    <div 
                        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]"    
                    >
                        <img 
                            src="src/assets/profile.png" 
                            alt="varun's headshot"
                            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" 
                        />
                    </div>
                ) : (
                    /* for screens below medium screen size, there will be no border, only the image */
                    <img 
                        src="src/assets/profile.png" 
                        alt="varun's headshot"
                        className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]" 
                    />
                )}
            </div>
            
            {/* MAIN CONTENT/TEXT */}
            <div className="z-30 basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <p className="mx-5 text-6xl font-robotoMono z-10 text-center md:text-start">
                        Varun <span className="ml-1 xs:relative xs:font-semibold z-20 xs:before:content-brush before:absolute before:-left-[-25px] before:-top-[70px] before:z-[-1]">Malaviya</span>
                    </p>
                    <p className="mx-5 my-10 text-center md:text-start">
                        Creating Innovative Solutions, One Line of Code at a Time
                    </p>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <AnchorLink
                        className="bg-gradient-rainblue rounded-lg py-3 px-5 mx-5 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setCurrentPage('projects')}
                        href="#projects"
                    >
                        Browse Portfolio
                    </AnchorLink>
                    <AnchorLink
                        className="bg-gradient-rainbow rounded-lg py-3 px-5 mx-5 font-semibold hover:bg-blue hover:text-white transition duration-500"
                        onClick={() => setCurrentPage('contact')}
                        href="#contact"
                    >
                        Let's talk
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay:1, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <Socials/>
                </motion.div>
            </div>
        </section>
    )
}

export { Home }