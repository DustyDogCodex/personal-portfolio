import { Project } from "./Project"
import { RainbowLineBreak } from "./RainbowLineBreak"
import { motion } from "framer-motion"

function Portfolio() {
    //this controls the parent motion.div in the projects section
    const container = {
        hidden: {}, //nothing will happen when hidden
        visible: {
            //animation for each of the child components (each individual project) will happen in a staggered fashion with a 0.2 delay between each other.
            transition: { staggerChildren: 0.2 }
        }
    }

    //an array containing a list of featured projects to be displayed.
    const projectList = [
        {
            title: 'Tenzies', 
            subtitle: 'The first player to roll the same 10 digits with 10 different dice wins!',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Tenzies', 
                live: 'https://dustydogcodex.github.io/Tenzies/'
            }
        },
        {
            title: 'Meme Maker 9000', 
            subtitle: 'Make memes from the 100 most popular memes on Imgflip',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Meme-Maker-9000', 
                live: 'https://dustydogcodex.github.io/Meme-Maker-9000/'
            }
        },
        {
            title: 'Brise', 
            subtitle: 'Weather app that forecasts weather for your current location',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Brise-Weather-App', 
                live: 'https://dustydogcodex.github.io/Brise-Weather-App/'
            }
        }
    ]

    //creating an array of projects for display
    const projectElements = projectList.map((proj,index) => {
        return (
            <Project 
                key={index} 
                title={proj.title} 
                subtitle={proj.subtitle}  
                links={proj.links}
            />
        )
    })

    return (
        <section
            id="projects" 
            className="p-20"
        >
            {/* section heading */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0}
                }}
            >
                <div>
                    <p 
                        className="font-permanentMarker text-red text-5xl font-semibold"
                    >
                        My Projects
                    </p>
                    <div className="mt-5">
                        <RainbowLineBreak/>
                    </div>
                </div>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center mt-10">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <div 
                        className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-roboto font-bold"
                    >
                        MODERN STYLISH INTERFACES
                    </div>

                    {projectElements}

                    <div 
                        className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-roboto font-bold"
                    >
                        SMOOTH USER EXPERIENCE
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export { Portfolio }