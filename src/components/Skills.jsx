import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

function Skills() {

    //checking for screen size
    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    return (
        <section 
            id="skills"
            className="p-10"    
        >
            <div 
                className="flex flex-col md:flex-row justify-between mt-12"
            >   

            {/* WHO I AM DIV */}            
            <div 
                className="md:w-1/2 text-center md:text-left"
            >
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
                    <h2 
                        className="text-center text-5xl text-emerald-500 font-permanentMarker"
                    >
                        Who I Am
                    </h2>

                    <p
                        className="mt-5 font-robotoMono text-lg"
                    >
                        Hi, I'm Varun! I'm a passionate and experienced software engineer who thrives on solving complex problems and creating efficient, scalable, and user-centric solutions. With expertise in ReactJS, Express, MongoDb and Tailwind, I have a solid foundation in full-stack development. My attention to detail, strong analytical mindset, and commitment to delivering high-quality code enable me to exceed client expectations and drive business growth.
                    </p> 
                    
                    <br/>
                    
                    <p 
                        className="mt-5 font-robotoMono text-lg"
                    >
                        I am a proactive learner and collaborative by nature. I enjoy working in cross-functional teams, leveraging effective communication to bring ideas to life. If you're looking for a dedicated and versatile software engineer who can tackle challenging projects with enthusiasm and expertise, look no further! I am ready to embark on my next exciting endeavor with you!
                    </p> 
                </motion.div>
            </div>

            {/* MY SKILLS DIV */}
            <div
                className="w-full md:w-1/2 mt-10 md:mt-0"
            >
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
                    <h3 
                        className="text-center text-5xl text-emerald-500 font-permanentMarker"
                    >
                        My skills
                    </h3>
                    <div className="flex items-center mt-4 flex-col">
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <FontAwesomeIcon 
                                icon={faReact} 
                                style={{color: "skyblue", height:'40px',width:"40px"}}
                            /> 
                            ReactJS 
                        </span>
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <FontAwesomeIcon 
                                icon={faJs} 
                                style={{color: "gold", height:'40px',width:"40px"}}
                            /> 
                            JavaScript
                        </span>
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <img
                                src='./images/tailwindcss.svg'
                                alt="tailwingcss logo" 
                                style={{ height:'40px',width:"40px"}}
                            /> 
                            TailwindCSS
                        </span>
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <FontAwesomeIcon 
                                icon={faNodeJs} 
                                style={{color: "green", height:'40px',width:"40px"}}
                            />  
                            NodeJS
                        </span>
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <FontAwesomeIcon 
                                icon={faNodeJs} 
                                style={{color: "white", height:'40px',width:"40px"}}
                            />   
                            Express
                        </span>
                        <span className="flex items-center text-2xl my-5 mx-3">
                            <img
                                src='./images/mongodb.svg'
                                alt="mongodb logo" 
                                style={{ height:'40px',width:"40px"}}
                            /> 
                            MongoDB
                        </span>
                    </div>
                </motion.div> 
            </div>
            </div>
        </section>
    )
}

export { Skills }