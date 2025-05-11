import React from "react";
import profileImage from "/images/Aman.jpg";

const About = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        {/* Left: Profile Image */}
        <div className="flex flex-col items-center">
          <img
            src={profileImage}
            alt="Aman Tripathi"
            className="rounded-lg w-48 h-64 object-cover border-4 border-violet-600 shadow-md"
          />
          <h1 className="text-2xl font-bold text-white mt-4">Aman Tripathi</h1>
        </div>

        {/* Right: Details */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-violet-300">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-gray-300">
            I'm a Computer Science undergraduate passionate about full-stack web development and backend engineering. With hands-on experience in React, JavaScript, Java, Python, and SQL, I focus on building scalable, responsive web applications.
          </p>

          <div>
            <h3 className="text-xl text-lime-400 font-semibold mb-2">
              Technical Skills
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Languages:</strong> JavaScript, Python, Java, SQL</li>
              <li><strong>Frontend:</strong> HTML, CSS, React, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js(Learning)</li>
              <li><strong>Databases:</strong> MongoDB(Learning)</li>
              <li><strong>Tools:</strong>Git, GitHub, VS Code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-lime-400 font-semibold mb-2">
              Education
            </h3>
            <ul className="text-gray-300 space-y-1">
              <li><strong>Galgotias University</strong> — B.Tech in Computer Science (2022–2026)</li>
              <li><strong>Jindal Public School</strong> — Intermediate (2020–2021), CGPA: 7.71/10</li>
              <li><strong>Holy Heart Public School</strong> — High School (2018–2019), CGPA: 7.70/10</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-lime-400 font-semibold mb-2">
              Certifications
            </h3>
            <ul className="text-gray-300 list-disc list-inside space-y-1">
              <li>Oracle Certified – Database Programming with SQL</li>
              <li>Oracle Certified – Java Foundations</li>
            </ul>
          </div>

          <div className="text-gray-400 italic">
            Outside of development, I enjoy playing computer games.
          </div>

          <div className="flex justify-center lg:justify-start">
          <a
            href="/Aman_Resume.pdf"
            download
            aria-label="Download Aman Tripathi's CV"
            className="bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-700 transition duration-300"
          >
            Download CV
          </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
