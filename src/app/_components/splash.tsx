import Image from "next/image";

export default function Splash(){
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <Image 
                    src="/assets/images/raven.jpg"
                    width={500}
                    height={500}
                    alt="VINAY SAHU"
                    className="w-40 h-40 rounded-full"
                />
            </div>
        </>
    );
}