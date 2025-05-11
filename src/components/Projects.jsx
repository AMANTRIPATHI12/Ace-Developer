import React from "react";

const projects = [
  {
    title: "Ace Developer (Portfolio Website)",
    description:
      "A modern portfolio website built with React.js and Tailwind CSS to showcase my projects, skills, and resume. Responsive design optimized for all devices.",
    codeLink: "https://github.com/AMANTRIPATHI12/Ace-Developer",
    liveLink: "https://your-portfolio-live-link.com", // Replace once deployed
  },
  {
    title: "Student Record Manager (Java GUI)",
    description:
      "A desktop Java Swing application for managing student records (Add, Update, Delete) with persistent file storage.",
    codeLink: "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/StudentRecord",
    liveLink: "",
  },
  {
    title: "Folder Sorter Script (Java Automation)",
    description:
      "Java program to auto-organize files into folders by extension, improving desktop and downloads folder hygiene.",
    codeLink: "https://github.com/AMANTRIPATHI12/Folder-Sorter",
    liveLink: "",
  },
  {
    title: "SmartScheduler (Java PriorityQueue App)",
    description:
      "A task prioritization app using Java's PriorityQueue to manage tasks by urgency. Includes Windows notifications.",
    codeLink: "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/Smart%20Scheduler",
    liveLink: "",
  },
  {
    title: "Expense Tracker (Java CLI App)",
    description:
      "Java-based command-line tool for daily expense tracking with summaries and local file data persistence.",
    codeLink: "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/Expense%20Tracker",
    liveLink: "",
  },
];

const Projects = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-4 sm:px-8 font-serif">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-violet-300 text-center mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300"
            >
              <h3 className="text-xl text-lime-400 font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-600 hover:bg-violet-500 text-white text-sm py-2 px-4 rounded-lg transition-all"
                >
                  View Code
                </a>
                {project.liveLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-600 hover:bg-lime-500 text-white text-sm py-2 px-4 rounded-lg transition-all"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
