import { useForm } from "react-hook-form"
import { motion } from "framer-motion"
import { Socials } from "./Socials"
import { RainbowLineBreak } from "./RainbowLineBreak"

function Contact() {

    //adding useForm to handle sending a message
    const { register, trigger, formState: { errors } } = useForm()

    //function to submit form and make sure inputs have been triggered before submission
    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section
            id="contact"
            className="p-5"
        >
            <motion.div
                className="md:w-2/4 mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0}
                }}
            >   
                <div>
                    <h2 
                        className="mt-5 text-5xl text-center font-permanentMarker text-amber-500"
                    >
                        Contact me to get started!
                    </h2>
                    <div
                        className="mt-5"
                    >
                        <RainbowLineBreak />
                    </div>
                </div>
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
                    className="md:w-1/2 w-4/5 rounded-lg mt-5 md:mt-0"
                    src="./images/programmer.jpg" 
                    alt="contact me" 
                />

                {/* form and socials section */}
                <div className="flex flex-col items-center justify-center md:w-4/5 w-full">

                    <Socials/>

                    {/* form for submitting a message. added netlify attribute to let netlify process form submission */}
                    <div
                        className="w-4/5 flex flex-col items-center justify-center"
                    >
                        <h3
                            className="text-3xl text-amber-400 mb-3 text-center"
                        >
                            Send me a message!
                        </h3>
                        
                        <form 
                            className="md:w-4/5 w-full"
                            target="_blank"
                            onSubmit={onSubmit}
                            action="https://formsubmit.co/280e83d4b1c4a5bbf549d02633e4c5fa"
                            method="POST"
                        >
                            <input 
                                {...register('name', 
                                    { 
                                        required: true 
                                    }
                                )}
                                type="text" 
                                placeholder="Name"
                                className="p-2 text-lg rounded-lg w-full bg-sky-400 placeholder:text-black"
                            />
                            {errors.name && (
                                <p
                                    className='bg-amber-500 text-red mt-3'
                                >
                                    A name is required
                                </p>
                            )}
                        
                            <input 
                                {...register('email', 
                                    { 
                                        required: true, 
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
                                    }
                                )}
                                type="text" 
                                placeholder="Email"
                                className="p-2 text-lg rounded-lg w-full bg-sky-400 placeholder:text-black mt-3"
                            />
                            {errors.email && (
                                <p
                                    className='bg-amber-500 text-red mt-3'
                                >
                                    {errors.email.type === 'required' && "An email is required"}
                                    {errors.email.type === 'pattern' && "Please enter a valid email address"}
                                </p>
                            )}

                            <div
                                className="flex items-center justify-between mt-3"
                            >
                                <textarea
                                    {...register('message', 
                                        { 
                                            required: true, 
                                            maxLength: 2000 
                                        }
                                    )}
                                    type="text" 
                                    placeholder="Message"
                                    className="p-2 text-lg rounded-lg w-full bg-sky-400 placeholder:text-black"
                                    rows={5}
                                />
                                {errors.message && (
                                    <p
                                        className='bg-amber-500 text-red mt-3'
                                    >
                                        {errors.message.type === 'required' && "A message is required"}
                                        {errors.message.type === 'maxLength' && "Message cannot be more than 2000 characters"}
                                    </p>
                                )}
                            </div>

                            <div
                                className="flex items-center justify-center"
                            >
                                <button
                                    type="submit"
                                    className="bg-green-500 py-1 px-3 text-lg rounded-lg mt-5 hover:bg-red transition duration-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export { Contact }