import React from "react";

const projects = [
  {
    title: "GTA-6 Showcase Website",
    description:
      "A 3D landing page inspired by GTA-6 using React, Tailwind CSS, and Framer Motion. Built with responsive UI and deployed on Vercel.",
    codeLink: "https://github.com/AMANTRIPATHI12/GTA-6",
    liveLink: "https://gta-6-rho.vercel.app/",
  },
  {
    title: "Movie Recommender System",
    description:
      "Built with React, Node.js, and TMDb API. Features trending, popular, and personalized recommendations with backend caching for speed.",
    codeLink: "https://github.com/AMANTRIPATHI12/Movie-Recomender",
    liveLink: "", // Add if deployed
  },
  {
    title: "Weather Now App",
    description:
      "A React-based weather app using OpenWeather API. Includes location-based search, error handling, and mobile-first UI.",
    codeLink: "https://github.com/AMANTRIPATHI12/weather-now-app",
    liveLink: "https://weather-now-app-phi.vercel.app/",
  },
  {
    title: "Ace Developer (Portfolio Website)",
    description:
      "This portfolio website built with React and Tailwind CSS highlights my projects, resume, and skills. Fully responsive and hosted on GitHub Pages.",
    codeLink: "https://github.com/AMANTRIPATHI12/Ace-Developer",
    liveLink: "https://amantripathi12.github.io/Ace-Developer/",
  },
  {
    title: "Student Record Manager (Java GUI)",
    description:
      "Java Swing desktop app for managing student records (Add, Update, Delete) with persistent file storage.",
    codeLink:
      "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/StudentRecord",
    liveLink: "",
  },
  {
    title: "Folder Sorter Script (Java Automation)",
    description:
      "Java program to auto-organize files by extension. Helps manage clutter in downloads and desktop folders.",
    codeLink: "https://github.com/AMANTRIPATHI12/Folder-Sorter",
    liveLink: "",
  },
  {
    title: "SmartScheduler (Java PriorityQueue App)",
    description:
      "Task management desktop app using Java’s PriorityQueue. Sorts tasks by urgency and includes Windows notifications.",
    codeLink:
      "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/Smart%20Scheduler",
    liveLink: "",
  },
  {
    title: "Expense Tracker (Java CLI App)",
    description:
      "Command-line Java app for tracking daily expenses with summary reports and file-based data persistence.",
    codeLink:
      "https://github.com/AMANTRIPATHI12/DSA-Project/tree/main/Expense%20Tracker",
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
              <p className="text-gray-300 text-sm mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-violet-600 hover:bg-violet-500 text-white text-sm py-2 px-4 rounded-lg transition-all"
                >
                  View Code
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-600 hover:bg-lime-500 text-white text-sm py-2 px-4 rounded-lg transition-all"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
