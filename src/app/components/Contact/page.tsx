import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faHouse, faUser, faSuitcase, faLightbulb, faAddressBook, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const navigation = [
  { name: 'Home', href: '/', icon: faHouse },
  { name: 'About', href: '/components/About', icon: faUser },
  { name: 'Projects', href: '/components/projects', icon: faSuitcase },
  { name: 'Skills', href: '/components/skills', icon: faLightbulb },
  { name: 'Certifications', href: '/components/Certifications', icon: faCertificate },
  { name: 'Contact', href: '/components/Contact', icon: faAddressBook },
];

export default function Contact() {
    return (
        <main className="p-4 sm:p-10 bg-black text-white lg:pl-96">
            <h1 className="text-3xl sm:text-3xl font-bold mb-8 text-center">Contact Me</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                {/* Contact Cards */}
                <div className="space-y-6 flex flex-col items-center lg:items-start">
                    <div className="border border-pink-700 rounded-lg p-6 w-full sm:w-80 h-44 flex flex-col justify-center items-center hover:animate-bounce-on-hover transition-transform duration-300 ease-in-out">
                        <Link href="https://www.linkedin.com/in/neelima-gottimukkala-3a035224a" className="flex flex-col justify-center items-center">
                            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 mb-2" />
                            <h2 className="text-xl sm:text-2xl mb-2 text-center">LinkedIn</h2>
                            <p className="text-pink-500 text-center">Connect with me</p>
                        </Link>
                    </div>

                    <div className="border border-pink-700 rounded-lg p-6 w-full sm:w-80 h-44 flex flex-col justify-center items-center hover:animate-bounce-on-hover transition-transform duration-300 ease-in-out">
                        <Link href="mailto:ransneelima@gmail.com" className="flex flex-col justify-center items-center">
                            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7 mb-2" />
                            <h2 className="text-xl sm:text-2xl mb-2 text-center">Email</h2>
                            <p className="text-pink-500 text-center">Write me</p>
                        </Link>
                    </div>

                    <div className="border border-pink-700 rounded-lg p-6 w-full sm:w-80 h-44 flex flex-col justify-center items-center hover:animate-bounce-on-hover transition-transform duration-300 ease-in-out">
                        <Link href="https://wa.me/9346938871" className="flex flex-col justify-center items-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 mb-2" />
                            <h2 className="text-xl sm:text-2xl mb-2 text-center">WhatsApp</h2>
                            <p className="text-pink-500 text-center">Message me</p>
                        </Link>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-4 w-full sm:w-80 mx-auto lg:mx-0">
                    <h3 className="text-2xl sm:text-3xl mt-4 sm:mt-8 text-center lg:text-left">Get In Touch</h3>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pink-700 transition-all duration-300 ease-in-out"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pink-700 transition-all duration-300 ease-in-out"
                    />
                    <input
                        type="text"
                        placeholder="Phone"
                        className="w-full p-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pink-700 transition-all duration-300 ease-in-out"
                    />
                    <textarea
                        placeholder="Message"
                        className="w-full p-4 bg-transparent border border-white rounded-md text-white focus:outline-none focus:border-pink-700 transition-all duration-300 ease-in-out"
                    ></textarea>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="p-3 w-3/4 sm:w-1/2 lg:w-1/2 bg-pink-500 rounded-full text-white hover:bg-pink-700 transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className="lg:hidden fixed bottom-0 left-3 right-3 bg-black shadow-lg">
        <div className="flex justify-between items-center p-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center text-white hover:text-pink-500"
            >
              <FontAwesomeIcon icon={item.icon} className="h-8 w-8" />
            </a>
          ))}
        </div>
      </div>
        </main>
    );
}
