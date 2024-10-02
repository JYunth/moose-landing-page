"use client";
import Image from 'next/image';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function HeroSection() {
    const images = [
        "/demo_mockups/shirt1.jpeg",
        "/demo_mockups/mockup1.png",
        "/demo_mockups/shirt2.jpg",
        "/demo_mockups/mockup2.png",
        "/demo_mockups/shirt3.jpg",
        "/demo_mockups/mockup3.png",
        "/demo_mockups/shirt4.jpg",
        "/demo_mockups/mockup4.png",
        "/demo_mockups/shirt5.jpg",
        "/demo_mockups/mockup5.png",
    ];

    const containerRef = React.useRef<HTMLDivElement>(null);
    const control1 = useAnimation();

    React.useEffect(() => {
        const width = containerRef.current?.offsetWidth || 0;

        control1.start({
            x: [-width/2, -width*2],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20,
                    ease: 'linear',
                },
            },
        });
    }, [control1]);

    return (
        <div className="flex flex-row justify-between h-full">
            <div className="flex flex-1 flex-col justify-center items-center">
                <p className='font-[family-name:var(--font-playwrite)] font-medium text-white text-7xl text-center'>flawless</p>
                <p className='font-inter text-white text-5xl p-10 text-center uppercase'>clothing mockups, at a fraction of the price</p>
            </div>
            <motion.div
                className="overflow-hidden w-2/3 my-auto"

                initial = {{
                    translateX: "100%",
                }}
                
                animate = {{
                    translateX: "0%",
                }}

                transition = {{
                    duration: 2,
                    ease: "easeInOut",
                }}
            >
                <div ref={containerRef} className="flex">
                    <motion.div className="flex overflox-x-hidden" animate={control1}>
                        {[...images, ...images].map((src, index) => (
                            <div key={index} className="flex-shrink-0 mx-4 items-center justify-center">
                                <Image
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    width={300}
                                    height={400}
                                    className="object-cover w-[300px] h-[400px]"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
