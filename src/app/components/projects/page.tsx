'use client';

import React from 'react';


const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills, projects, and contact information.',
    technologies: ['Next.js', 'Tailwind CSS', 'React'],
    link: 'https://yourportfolio.com', 
    github: 'https://github.com/yourusername/portfolio', 
  },
  {
    title: 'Snake Game',
    description: 'Developed a simple Snake game with intuitive UI, implementing game logic including collision detection, food production, and snake movement.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://yourecommerce.com', 
    github:'https://neelimagottimukkala.github.io/SnakeGame/',
  },
 
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white p-6 lg:pl-80">
      <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8 w-full">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="p-6 border border-pink-700 rounded-lg shadow-lg hover:shadow-pink-700/50 transition-shadow duration-300 lg:w-1/3"
          >
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="mb-4">
              <h3 className="font-medium">Technologies:</h3>
              <ul className="list-disc ml-4 space-y-1">
                {project.technologies.map((tech, idx) => (
                  <li key={idx} className="text-gray-400">{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:underline"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
