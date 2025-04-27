import React from "react";

const projects = [
  {
    title: "Student Record Manager (Java GUI)",
    description:
      "A desktop application to manage student records (Add, Update, Delete) using Java Swing and File I/O. Features real-time updates and persistent storage.",
    codeLink: "https://github.com/AMANTRIPATHI12/Student-Record-Manager",
    liveLink: "", // No live demo for Java GUI apps
  },
  {
    title: "Folder Sorter Script (Python Automation)",
    description:
      "Python-based script that automatically organizes files into folders by extension, improving file management efficiency.",
    codeLink: "https://github.com/AMANTRIPATHI12/Folder-Sorter",
    liveLink: "",
  },
  {
    title: "SmartScheduler (Java PriorityQueue App)",
    description:
      "Task prioritizer using Java's PriorityQueue to organize tasks based on deadlines and priorities, with Windows notification support.",
    codeLink: "https://github.com/AMANTRIPATHI12/Smart-Scheduler",
    liveLink: "",
  },
  {
    title: "ExpenseTracker (Java Budget Manager)",
    description:
      "Command-line Java application for tracking daily expenses by category, storing data in local files, and generating summaries.",
    codeLink: "https://github.com/AMANTRIPATHI12/Expense-Tracker",
    liveLink: "",
  },
  {
    title: "Ace Developers (Portfolio Website)",
    description:
      "A personal portfolio website built with React.js, showcasing projects, skills, and providing a way to connect professionally.",
    codeLink: "https://github.com/AMANTRIPATHI12/Portfolio-Website", // update if different
    liveLink: "https://your-portfolio-live-link.com", // your Netlify/Vercel link if deployed
  },
];

const Projects = () => {
  return (
    <div className="bg-zinc-900 text-white font-serif w-full min-h-screen p-8">
      <h2 className="text-3xl font-semibold text-violet-300 text-center mb-8">
        Our Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out"
          >
            <h3 className="text-xl text-lime-400 font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-300 mb-6">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-600 hover:bg-violet-500 text-white py-2 px-4 rounded-lg transition-all"
              >
                View Code
              </a>
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-lime-600 hover:bg-lime-500 text-white py-2 px-4 rounded-lg transition-all"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
