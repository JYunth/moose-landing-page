import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <div className = "flex flex-col">   
            <div className = "flex flex-row p-4">
                <div className = "flex flex-1 items-center justify-center">
                    <Image
                        src = "/moose-logo.svg"
                        alt = "moose logo"
                        height = {500}
                        width = {500}
                        className = ""
                    />
                </div>
                <div className = "flex flex-col flex-1">
                    <p className = "font-[family-name:var(--font-geist-sans)] font-bold text-6xl text-center text-white">Follow our socials</p>
                    <p>duuuuude what</p>
                </div>
            </div>
            <div className = "flex flex-row justify-between p-4">
                <p className = "font-[family-name:var(--font-geist-sans)] font-light text-xl text-center text-white">smthsmth@smth.com</p>
                <p className = "font-[family-name:var(--font-geist-sans)] font-light text-xl text-center text-white">instagram link</p>
                <p className = "font-[family-name:var(--font-geist-sans)] font-light text-xl text-center text-white">xwitter</p>
                <p className = "font-[family-name:var(--font-geist-sans)] font-light text-xl text-center text-white">made with love by join, allwin, super saiyan, harizz and andy</p>
            </div>
        </div>
    );
}