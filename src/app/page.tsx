'use client';

import ParticleGlobeSvg from "../../public/assets/svgComponents/particleGlobe";

export default function Home() {

  const handleContact = () => {
    window.open('https://www.linkedin.com/in/vinayr219', '_blank');
  }

  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div className=" flex flex-1 mx-2" style={{ height: "80vh" }}>
          {/* Left Div */}
          <div className="flex-1 p-4 flex items-center justify-center pl-20 ">
            <div className="flex flex-col items-start">
              <div>&lt;Hello, world&gt;</div>
              <div className="text-4xl mt-4">
                My Name is Vinay. I am a software engineer from India.
              </div>

              <div className="text-xl mt-10">
                <button
                  onClick={handleContact}
                  className="text-white-500 bg-transparent border border-black-500 hover:bg-black-500 hover:text-black-500 py-1 px-5 "
                >
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>

          {/* Right Div */}
          <div className="flex-1 p-4 flex items-center justify-center ">
            <h2 className="text-white text-center">
              <ParticleGlobeSvg height="850" width="850" />
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
