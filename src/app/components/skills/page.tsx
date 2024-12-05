'use client';

import React, { useState } from 'react';
import { faCode, faDatabase, faCogs, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
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

const skillsData = [
  {
    category: 'Programming Languages',
    icon: faCode,
    skills: ['C', 'Python', 'Java'],
  },
  {
    category: 'Database & DevOps',
    icon: faDatabase,
    skills: ['SQL', 'MongoDB'],
  },
  {
    category: 'CS Core',
    icon: faDatabase,
    skills: ['DSA', 'DBMS', 'CN'],
  },
  {
    category: 'Soft Skills',
    icon: faPaintBrush,
    skills: ['Problem Solving', 'Teamwork'],
  },
  {
    category: 'Web Technologies',
    icon: faCogs,
    skills: ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'NextJS', 'AngularJS'],
  },
];

export default function Skills() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Toggle the category based on the clicked category
  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null); // Close the category if it's already open
    } else {
      setOpenCategory(category); // Open the clicked category and close others
    }
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 lg:pl-80">
      <h1 className="text-3xl font-bold text-center mb-8">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8 w-full">
        {skillsData.map((category) => (
          <div
            key={category.category}
            className="p-6 border border-pink-700 rounded-lg shadow-lg hover:shadow-pink-700/50 transition-shadow duration-300 lg:w-1/3"
          >
            <div className="flex items-center mb-4 cursor-pointer" onClick={() => toggleCategory(category.category)}>
              <FontAwesomeIcon
                icon={category.icon}
                className="text-pink-500 w-6 h-6 mr-4"
              />
              <h2 className="text-2xl font-semibold">{category.category}</h2>
            </div>

            {/* Conditionally render category content */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openCategory === category.category ? 'max-h-[300px]' : 'max-h-0'
              }`}
            >
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-white bg-gray-800 px-4 py-2 rounded-lg hover:bg-pink-500 transition-colors duration-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
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
    </main>
  );
}
