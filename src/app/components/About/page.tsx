'use client';
import Image from 'next/image';

export default function About() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/NeelimaResume.pdf';
    link.download = 'NeelimaResume.pdf';
    link.click();
  };

  return (
    <div className="bg-black text-white min-h-screen lg:pl-56">
      <div className="w-full p-6">
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

        {/* Profile and Text Section */}
        <div className="flex flex-col md:flex-row items-center justify-center lg:mt-40 mt-10 space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Image */}
          <div className="relative">
            <div className="rounded-full bg-pink-500 w-48 h-48 flex items-center justify-center">
              <Image src="/ph.jpeg" alt="Profile" className="rounded-full w-44 h-44 object-cover" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-lg leading-relaxed">
              I'm Gottimukkala Neelima, a B.Tech student who loves web development
              and has a solid foundation in full-stack development.
              I am always on the lookout for opportunities to learn, grow,
              and put my programming skills to use. My journey in the tech world 
              started with a curiosity for coding. I'm well-versed in programming
              languages like C, Python, and Java. I am committed to continuous learning
              and always eager to explore new tools and frameworks.
            </p>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="text-center mt-12">
          <button
            className="px-6 py-3 rounded-full bg-pink-500 text-white hover:bg-pink-700 transition duration-300"
            onClick={handleDownload}
          >
            Download Resume
          </button>
        </div>

        {/* Qualifications Section */}
        <main className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Qualification</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Education Section */}
            <div className="flex justify-end">
              <div>
                <h3 className="text-3xl font-semibold mb-10">Education</h3>
                <div className="relative mb-8">
                  <div className="absolute left-0 h-full border-l-4 border-pink-500 ml-2"></div>
                  <div className="ml-1 space-y-8">
                    <div>
                      <div className="flex items-center space-x-4">
                        <span className="w-4 h-4 mb-14 bg-pink-500 rounded-full"></span>
                        <div>
                          <h4 className="text-lg font-bold">GMRIT (Rajam, Andhra Pradesh)</h4>
                          <p>Computer Science Engineering</p>
                          <p className="text-pink-500">2021-2025</p>
                          <p className="text-pink-500">CGPA: 9.54</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-4">
                        <span className="w-4 h-4 mb-20 bg-pink-500 rounded-full"></span>
                        <div>
                          <h4 className="text-lg font-bold">Narayana Junior College</h4>
                          <p>(Vishakapatnam, Andhra Pradesh)<br />MPC</p>
                          <p className="text-pink-500">2019-2021</p>
                          <p className="text-pink-500">Percentage: 96.8%</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-4">
                        <span className="w-4 h-4 mb-20 bg-pink-500 rounded-full"></span>
                        <div>
                          <h4 className="text-lg font-bold">Sri Chaitanya Techno School</h4>
                          <p>(Rajam, Andhra Pradesh)<br /> SSC</p>
                          <p className="text-pink-500">2018</p>
                          <p className="text-pink-500">Grade: 10.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="flex">
              <div>
                <h3 className="text-3xl font-semibold mb-6">Experience</h3>
                <div className="relative mb-8">
                  <div className="absolute left-0 h-full border-l-4 border-pink-500 ml-2"></div>
                  <div className="ml-1 space-y-8">
                    <div>
                      <div className="flex items-center space-x-4">
                        <span className="w-4 h-4 mb-7 bg-pink-500 rounded-full"></span>
                        <div>
                          <h4 className="text-lg font-bold">Topnotch Softwares Pvt Ltd</h4>
                          <p>Web Developer</p>
                          <p className="text-pink-500">August-2023</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-4">
                        <span className="w-4 h-4 mb-8 bg-pink-500 rounded-full"></span>
                        <div>
                          <h4 className="text-lg font-bold">Suri Information Services</h4>
                          <p>Web Developer</p>
                          <p className="text-pink-500">2024-Present</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
