import React from "react";
import profileImage from "/images/Aman.jpg";

const About = () => {
  return (
    <section className="bg-zinc-900 text-white py-16 px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        {/* Left Section: Image */}
    <div className="flex flex-col items-center lg:w-1/3">
      <img
        src={profileImage}
        alt="Aman Tripathi"
        className="rounded-lg w-56 h-74 object-cover border-4 border-violet-600 shadow-md"
      />
      <h1 className="text-2xl font-bold text-white mt-4">Aman Tripathi</h1>
    </div>


        {/* Right Section: Details */}
        <div className="lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-semibold text-violet-300 mb-6">
            About Me
          </h2>

          <p className="text-lg text-gray-300 mb-6">
            I'm an aspiring software engineer pursuing a B.Tech in Computer Science from Galgotias University (2022–2026). I have a strong passion for backend development and infrastructure systems, and I'm actively exploring opportunities to grow in the DevOps and platform engineering space.
          </p>

          <p className="text-lg text-gray-300 mb-6">
            Currently, I'm seeking an internship at Agoda where I hope to contribute to building scalable infrastructure using tools and technologies like Linux, Kubernetes, OpenStack, and Python. I love solving real-world problems and continuously learning through hands-on experience.
          </p>

          {/* Skills Section */}
          <div className="text-gray-300 mb-6">
            <h3 className="text-xl text-lime-400 font-semibold mb-2">Skills</h3>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li><strong>Languages:</strong> JavaScript, Python, Java</li>
              <li><strong>Frontend:</strong> HTML, CSS, React.js, Tailwind CSS</li>
              <li><strong>Backend:</strong> Node.js, Express.js</li>
              <li><strong>Databases:</strong> MongoDB, SQL (Basic)</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
              <li><strong>Tools & Platforms:</strong> VS Code, Linux, Postman</li>
              <li><strong>Fundamentals:</strong> REST APIs, OOP, Data Structures & Algorithms</li>
            </ul>
          </div>


          {/* Languages */}
          <div className="text-gray-300 mb-6">
            <h3 className="text-xl text-lime-400 font-semibold mb-2">Languages</h3>
            <ul className="list-disc list-inside space-y-1 text-left">
              <li>English (Proficient)</li>
              <li>Hindi (Proficient)</li>
            </ul>
          </div>

          {/* Education */}
          <div className="text-gray-300 mb-6">
            <h3 className="text-xl text-lime-400 font-semibold mb-2">Education</h3>
            <ul className="space-y-1 text-left">
              <li><strong>Galgotias University</strong> — B.Tech in Computer Science (2022–2026)</li>
              <li><strong>Jindal Public School</strong> — Intermediate (2020–2021), CGPA: 7.71/10</li>
              <li><strong>Holy Heart Public School</strong> — High School (2018–2019), CGPA: 7.70/10</li>
            </ul>
          </div>

          {/* Optional personal touch */}
          <p className="text-gray-400 italic mb-8">
            Outside of tech, I enjoy exploring music, watching tech videos, and playing chess. I believe that curiosity and consistency are the keys to meaningful growth.
          </p>

          {/* Download CV Button */}
          <a
            href="/path/to/your/cv.pdf"
            download
            className="inline-block bg-violet-600 text-white py-3 px-6 rounded-lg hover:bg-violet-700 transition duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
