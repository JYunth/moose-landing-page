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
            </div>
            <div className = "flex flex-row justify-center p-4 w-screen">
                <p className = "font-[family-name:var(--font-geist-sans)] font-semibold w-full text-xl text-center text-black bg-white p-4 mb-0 uppercase">made with love by jheyanth, allwin, seyan, harish and andy <span className="text-2xl">♥</span></p>
            </div>
        </div>
    );
}