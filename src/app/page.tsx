'use client';

import Image from 'next/image';


export default function PortfolioContent() {
  return (
    <div className="bg-black min-h-screen flex flex-col items-center text-white">
  <main className="h-screen w-full p-6 flex flex-col items-center justify-center -mt-20 md:mt-0 md:p-14">
    <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 lg:pl-20">
      {/* Profile Image in main content */}
      <div className="w-40 h-40 md:w-60 md:h-60 overflow-hidden rounded-full mt-8 md:mb-0">
        <Image
          src="/ph.jpeg"
          alt="Profile Picture"
          width={235}
          height={235}
          className="object-cover"
        />
      </div>

          {/* Text content */}
          <div className="max-w-lg text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hello, my name is <br />
              <span className="text-pink-500 typing-effect">Gottimukkala Neelima</span>
            </h2>
            <p className="mt-4 text-lg md:text-xl">
              I'm a <span className="text-pink-500">Web Developer</span>
            </p>
            <p className="mt-4">
              I turn ideas into interactive websites. I code, design, and make digital magic happen.
              Let's explore my portfolio.
            </p>
            <button
              className="mt-6 px-6 py-2 bg-pink-500 rounded-lg text-white hover:bg-pink-700 transition duration-300"
            >
              More about me
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
