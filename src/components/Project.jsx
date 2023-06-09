/* styling for div containing displayed projects in the portfolio section. Honorable mentions are in a separate component */
import { motion } from "framer-motion"

function Project({ title, subtitle, links }) {

    //lowercasing project titles to reference project screenshots.
    const projectTitle = title.split(" ").join("-").toLowerCase()

    //this controls the animations for each individual project
    const projectAnimation = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    }

    return (
        <motion.div 
            variants={projectAnimation}
            className="relative"    
        >
            <div
                className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 z-30 flex bg-gray flex-col justify-center items-center text-center p-16 text-deep-blue"
            >
                <p 
                    className="text-2xl font-roboto"
                >
                    {title}
                </p>
                <p className="mt-7">
                    {subtitle}
                </p>
            </div>
            <img 
                className="w-[400px] max-h-[400px]"
                src={`./images/${projectTitle}.png`}
                alt={`${projectTitle} screenshot`} 
            />
        </motion.div>
    )
}

export { Project }