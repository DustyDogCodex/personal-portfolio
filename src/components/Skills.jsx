import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faJs } from "@fortawesome/free-brands-svg-icons"
import { faReact } from "@fortawesome/free-brands-svg-icons"
import { faCss3 } from "@fortawesome/free-brands-svg-icons"
import { faNodeJs } from "@fortawesome/free-brands-svg-icons"
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons"
import useMediaQuery from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

function Skills() {

    const aboveMediumScreens = useMediaQuery("(min-width: 1060px)")

    /* array of skills and respective icons from Font Awesome Library */
    /* FOnt awesome doesn't have icons for Heroku, Mongodb and Express so I just used the closest icons that represent them lol */
    
    const skillSet = [
        { 
            lang: 'ReactJs',
            icon: faReact
        },
        { 
            lang: 'JavaScript',
            icon: faJs
        },
        { 
            lang: 'TailwindCSS',
            icon: faCss3
        },
        { 
            lang: 'NodeJs',
            icon: faNodeJs
        },
        { 
            lang: 'Express',
            icon: faNodeJs
        },
        { 
            lang: 'MongoDb',
            icon: faCloudArrowUp
        },
        
    ]

    /* mapping skills into an array of p elements containing a programming lang and its respective icon from font awesome library. */
    const skillIcons = skillSet.map((skill,index) => {
        return (<p key={index}>
            <FontAwesomeIcon icon={skill.icon} style={{color: "#f2df07",}}/> {skill.lang}
            </p>)
    })

    return (
        <section 
            id="skills"
            className="p-20"    
        >
            <div 
                className="flex justify-between gap-16 mt-20"
            >   
            <div 
                className="w-1/2">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0}
                    }}
                >
                    <h2 className="heading">About Me!</h2>
                    <p className="mt-5">Hi, I'm Varun! I'm a passionate and experienced software engineer with a strong background in developing innovative solutions. I thrive on solving complex problems and creating efficient, scalable, and user-centric solutions. With expertise in ReactJS, Express, MongoDb and Tailwind, I have a solid foundation in full-stack development. My attention to detail, strong analytical mindset, and commitment to delivering high-quality code enable me to exceed client expectations and drive business growth.</p> 
                    <br/>
                    <p>I am a proactive learner, always keeping up with the latest industry trends and continuously expanding my knowledge. Collaborative by nature, I enjoy working in cross-functional teams, leveraging effective communication to bring ideas to life. If you're looking for a dedicated and versatile software engineer who can tackle challenging projects with enthusiasm and expertise, look no further! I am ready to embark on my next exciting endeavor with you!</p> 
                </motion.div>
            </div>
            <div
                className="w-1/2"
            >
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 300 },
                        visible: { opacity: 1, x: 100}
                    }}
                >
                    <h3 className="sub-heading">My skills include:</h3>
                    <div className="skills">
                        {skillIcons}
                    </div>
                </motion.div> 
            </div>
            </div>
        </section>
    )
}

export { Skills }