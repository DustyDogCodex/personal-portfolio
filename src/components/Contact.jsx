import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Socials } from "./Socials"

function Contact() {

    //adding useForm to handle sending a message
    return (
        <section
            id="contact"
            className="p-10"
        >
            <motion.div
                className="flex flex-col justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0}
                }}
            >
                <h2 
                    className="text-5xl font-permanentMarker text-amber-500 mb-5"
                >
                    Contact me to get started!
                </h2>
                <p 
                    className="text-center font-robotoMono text-lg"
                >I am currently looking for new oppurtunities! If you would like to hire me or collaborate on a project, feel free to contact me using one of the mediums below!</p>
                <Socials/>
            </motion.div>
        </section>
    )
}

export { Contact }