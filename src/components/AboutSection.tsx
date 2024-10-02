"use client";
import { CompareDemo } from "./CompareDemo";
import { motion } from "framer-motion";


export default function AboutSection() {
    return (
        <div className="flex flex-row items-center justify-evenly font-inter space-x-14">
            <div className = "hidden md:block mx-10">
                <CompareDemo />
                <p className="text-white text-lg font-light px-10 py-4 text-center">(Hover from side to side)</p>
            </div>

            <motion.div>
                <p className="text-white text-6xl font-semibold uppercase text-start pt-10 pb-5">ditch</p>
                <ul className="list-disc pb-14">
                    <li className="text-white text-3xl font-semibold text-start">Expensive studios</li>
                    <li className="text-white text-3xl font-semibold text-start">Time-consuming photoshoots</li>
                    <li className="text-white text-3xl font-semibold text-start">Complicated model coordination</li>
                </ul>

                <p className="text-white text-4xl font-semibold hyphens-auto">
                    Moose&apos;s cutting edge mockup engine uses <motion.span
                        className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-2"

                        initial = {{
                            backgroundSize: "0% 100%",
                        }}

                        animate = {{
                            backgroundSize: "100% 100%",
                        }}

                        transition = {{
                            duration: 2,
                            ease: "linear",
                            delay: 0.5
                        }}

                        style = {{
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left center",
                            display: "inline"
                        }}
                    >
                        generative AI technology
                    </motion.span> to generate stunning mockups in <motion.span
                        className="text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg px-2"

                        initial = {{
                            backgroundSize: "0% 100%",
                        }}

                        animate = {{
                            backgroundSize: "100% 100%",
                        }}

                        transition = {{
                            duration: 2,
                            ease: "linear",
                            delay: 0.5
                        }}

                        style = {{
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "left center",
                            display: "inline"
                        }}
                    >
                        seconds!
                    </motion.span>
                </p>
            </motion.div>
        </div>
    );
}