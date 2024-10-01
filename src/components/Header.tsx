import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    return (
        <div className = "flex justify-between">
            <Image 
                src = "/moose-logo.svg"
                height= {250}
                width = {250}
                alt = "moose logo"
                className = "p-4"
            />

            <Link href="/#footer">
                <button className = "border border-white text-white cursor-pointer px-10 py-2 m-4 font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:text-black hover:bg-white transition-all duration-300">
                    Contact us
                </button>
            </Link>
        </div>
    );
}