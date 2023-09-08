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
            title: 'Dost', 
            subtitle: 'Responsive full stack social media app',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Dost', 
                live: 'https://dost-production.up.railway.app/'
            }
        },
        {
            title: 'Gasbnb', 
            subtitle: 'Responsive full stack Airbnb clone',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Gasbnb', 
                live: 'https://gasbnb-production.up.railway.app/'
            }
        },
        {
            title: 'Bloggy', 
            subtitle: 'Read other\'s blog post and create your own!',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/bloggy', 
                live: 'https://bloggy-production.up.railway.app/'
            }
        },
        {
            title: 'My Portfolio', 
            subtitle: 'My fully responsive custom portfolio website',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/personal-portfolio', 
                live: 'https://dustydogcodex.github.io/personal-portfolio/'
            }
        },
        {
            title: 'Hangman', 
            subtitle: 'Hangman game built using Typescript, Tailwind and React',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/hangman', 
                live: 'https://main--famous-kringle-785f56.netlify.app/'
            }
        },
        {
            title: 'Do You Memba', 
            subtitle: 'A King of the Hill themed memory card game built using React',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/do-you-memba', 
                live: 'https://dustydogcodex.github.io/do-you-memba/'
            }
        },
        {
            title: 'Tenzies', 
            subtitle: 'Roll the same 10 digits with 10 different dice to win!',
            links: 
            {
                github: 'https://github.com/DustyDogCodex/Tenzies', 
                live: 'https://dustydogcodex.github.io/Tenzies/'
            }
        }
    ]

    //creating an array of projects for display
    const projectElements = projectList.map((proj,index) => 
        <Project 
            key={index} 
            title={proj.title} 
            subtitle={proj.subtitle}  
            links={proj.links}
        />
    )

    return (
        <section
            id="projects" 
            className="py-48"
        >
            {/* section heading */}
            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
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

                    <div className="mt-3 mb-6">
                        <RainbowLineBreak/>
                    </div>
                </div>
            </motion.div>

            {/* PROJECTS */}
            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div 
                        className="flex justify-center text-center items-center p-10 bg-red max-w-96 max-h-80 text-2xl font-roboto font-bold"
                    >
                        MODERN STYLISH INTERFACES
                    </div>

                    {projectElements}

                    <div 
                        className="flex justify-center text-center items-center p-10 bg-blue max-w-96 max-h-80 text-2xl font-roboto font-bold"
                    >
                        SMOOTH USER EXPERIENCES
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export { Portfolio }