import Image from 'next/image';
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faSuitcase, faLightbulb, faAddressBook, faCertificate } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', href: '/', icon: faHouse },
  { name: 'About', href: '/components/About', icon: faUser },
  { name: 'Projects', href: '/components/projects', icon: faSuitcase },
  { name: 'Skills', href: '/components/skills', icon: faLightbulb },
  { name: 'Certifications', href: '/components/Certifications', icon: faCertificate },
  { name: 'Contact', href: '/components/Contact', icon: faAddressBook },
];

export default function Certifications() {
  const certificates = [
    {
      title: 'Introduction to Web Development',
      image: '/images/cert1.jpeg',
      url: 'https://drive.google.com/file/d/1iiCj6JkqrMwnuxd8cQlaf8i3OK3BSLRS/view?usp=sharing',
    },
    {
      title: 'Introduction to Web Development with HTML,CSS,JavaScript',
      image: '/images/cert2.jpeg',
      url: 'https://drive.google.com/file/d/1y0A_2dOJsH8BxaYNzCdl3n3Vb63NZycv/view?usp=sharing',
    },
    {
      title: 'Secure Full Stack MEAN Developer',
      image: '/images/cert3.jpeg',
      url: 'https://drive.google.com/file/d/1ehjOYUedF0LKcJo7ZbkQnwm2nlgkarGU/view?usp=sharing',
    },
    {
      title: 'Ethical Hacking',
      image: '/images/cert5.jpeg',
      url: 'https://drive.google.com/file/d/1lZjU0cIaB1nM3svl1Ix2kh-k51VywmBu/view?usp=sharing',
    },
    {
      title: 'Programming, Data Structures & Algorithms Using Python',
      image: '/images/cert4.jpeg',
      url: 'https://drive.google.com/file/d/1VxZaWWn3p5HuFUvtUyrb4a_74oHqyZCC/view?usp=sharing',
    },
    {
      title: 'Programming, Data Structures & Algorithms Using Java',
      image: '/images/cert11.png',
      url: 'https://drive.google.com/file/d/18att46VsalJJLq3ViR1q744r2L0wMR4P/view?usp=sharing',
    },
    {
      title: 'Business Intelligence & Analytics',
      image: '/images/cert6.jpeg',
      url: 'https://drive.google.com/file/d/1Xhtc4-KOLSGhpDtBUj1ZTiUKMMQKGcZn/view?usp=sharing',
    },
    {
      title: 'Machine Learning with Python-Edx',
      image: '/images/cert7.jpeg',
      url: 'https://drive.google.com/file/d/1eS-0JPHyD7c44ZvBS33J1BGX6wwKoK1V/view?usp=sharing',
    },
    {
      title: 'Programming in Modern C++',
      image: '/images/cert8.jpeg',
      url: 'https://drive.google.com/file/d/1QTEECmr7brKfvXZxUbfpjam19ftXJUU5/view?usp=sharing',
    },
    {
      title: 'Certificate of Merit in Naukri Campus',
      image: '/images/cert10.jpeg',
      url: 'https://drive.google.com/file/d/172HmUodPlNwYC-ESUkG-6d5cWP17LIzt/view?usp=sharing',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center py-10 px-4 lg:pl-80">
      <h1 className="text-3xl font-bold text-center mb-6">Certifications</h1>
      <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-60 gap-y-10 max-w-screen-xl  mt-10">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="card border border-pink-700 rounded-lg bg-black-900 shadow-lg p-4 flex flex-col items-center justify-between sm:w-[260px] lg:w-[320px]"
          >
            <Image
              src={certificate.image}
              alt={certificate.title}
              width={300}
              height={200}
              className="rounded-lg object-cover"
            />
            <h2 className="mt-2 text-xl text-center">{certificate.title}</h2>
            <a
              href={certificate.url}
              className="mt-4 px-4 sm:px-2 py-2 bg-pink-500 rounded-lg text-white hover:bg-pink-700 transition duration-300 text-center"
            >
              View Certificate
            </a>
          </div>
        ))}
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
    </div>
  );
}