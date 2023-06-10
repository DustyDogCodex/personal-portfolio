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
                    className="mt-5 text-5xl text-center font-permanentMarker text-amber-500 mb-10"
                >
                    Contact me to get started!
                </h2>
            </motion.div>

            <motion.div
                className="basis-1/2 flex justify-center items-center flex-col md:flex-row"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0}
                }}
            >
                <img 
                    className="w-[450px] h-[350px] rounded-lg"
                    src="./images/contact-me.jpeg" 
                    alt="contact me" 
                />
                <div className="flex flex-col items-center justify-center">
                    <p 
                        className="text-center font-robotoMono text-lg p-5"
                    >
                        I am currently looking for new oppurtunities! If you would like to hire me, collaborate on a project, or buy me pizza/coffee feel free to contact me using one of the mediums below!
                    </p>
                    <Socials/>
                </div>
            </motion.div>
        </section>
    )
}

export { Contact }