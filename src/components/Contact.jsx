import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Socials } from "./Socials"

function Contact() {

    //adding useForm to handle sending a message
    const { register, handleSubmit, formState: { errors } } = useForm()

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
                <div className="flex flex-col items-center justify-center p-5">
                    <p 
                        className="text-center font-robotoMono text-lg"
                    >
                        I am currently looking for new oppurtunities! If you would like to hire me, collaborate on a project, or buy me pizza/coffee feel free to contact me using one of the mediums below!
                    </p>
                    <Socials/>

                    {/* form for submitting a message. added netlify attribute to let netlify process form submission */}
                    <form 
                        className="border-2 border-amber-500 w-full py-5 px-20"
                        netlify
                    >
                        <div
                            className="flex items-center justify-between"
                        >
                            <label
                                className="text-lg text-amber-400"
                            >
                                Name
                            </label>
                            <input 
                                {...register('name', { required: true })}
                                type="text" 
                                placeholder="Please enter your name"
                                className="p-1 rounded-lg ml-5 w-full bg-sky-400 placeholder:text-black"
                            />
                        </div>

                        <div
                            className="flex items-center justify-between mt-3"
                        >
                            <label
                                className="text-lg text-amber-400"
                            >
                                Email
                            </label>
                            <input 
                                {...register('email', { required: true })}
                                type="text" 
                                placeholder="Please enter your email"
                                className="p-1 rounded-lg ml-5 w-full bg-sky-400 placeholder:text-black"
                            />
                        </div>

                        <div
                            className="flex items-center justify-between mt-3"
                        >
                            <label
                                className="text-lg text-amber-400"
                            >
                                Message
                            </label>
                            <textarea
                                {...register('message', { required: true })}
                                type="text" 
                                placeholder="Enter your message"
                                className="p-1 rounded-lg ml-5 w-full bg-sky-400 placeholder:text-black"
                            />
                        </div>

                        <div
                            className="flex items-center justify-center"
                        >
                            <button
                                className="bg-green-500 py-1 px-3 text-lg rounded-lg mt-5"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </section>
    )
}

export { Contact }