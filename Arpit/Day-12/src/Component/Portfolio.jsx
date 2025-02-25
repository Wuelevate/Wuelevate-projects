import React from "react";

const Navbar = () => {
  return (
    <nav className="px-40 flex justify-between items-center text-white py-4">
      {[
        { name: "About", link: "#About" },
        { name: "Skills", link: "#Skills" },
        { name: "Projects", link: "#Projects" },
        { name: "Contact", link: "#contacts" },
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          className="block px-4 py-2 text-xl hover:text-gray-200"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
};

const About = () => {
  return (
    <section id="About" className="sm:w-3/5 ml-40 mt-32 text-white">
      <p className="text-2xl font-semibold text-green-500">Hi, My Name is</p>
      <h2 className="font-bold text-5xl">Arpit Gupta</h2>
      <h2 className="text-3xl font-semibold text-green-500">Software Developer</h2>
      <p className="mt-2 text-xl">
        "I have a Bachelor's degree in Computer Engineering.<br /> Currently, I am
        focused on learning Frontend Development.<br /> I love building products
        that can be used by millions of people."
        <br />
        <span className="font-bold text-green-500 text-xl">
          Open for work & Collaboration.
        </span>
      </p>
      <div className="mt-10">
        <a
          href="#Skills"
          className="px-10 py-3 text-green-500 border-2 border-green-500 font-bold transition-all hover:bg-green-500 hover:bg-opacity-20 rounded-md"
        >
          Check out My Skills
        </a>
      </div>
    </section>
  );
};

const Skills = () => {
    const skillsData = [
        {
          name: "HTML5",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
      ];

  return (
    <section id="Skills" className="max-w-6xl mx-auto px-6 text-center mt-56">
    <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
      <span className="border-t border-green-500 flex-1"></span>
      <span className="px-8 text-4xl">My Skills</span>
      <span className="border-t border-green-500 flex-1"></span>
    </h2>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {skillsData.map((skill, index) => (
        <div key={index} className="shadow-lg rounded-xl p-6 flex flex-col items-center">
          <img src={skill.image} alt={skill.name} className="w-16 h-16 mb-3" />
          <p className="text-lg font-semibold text-white">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>

  );
};

const Projects = () => {
  return (
    <section id="Projects" className="py-12 flex justify-center mt-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">My Projects</h2>
        <div className="flex justify-center">
          <div className="bg-gray-100 bg-opacity-25 shadow-lg rounded-xl p-6 max-w-md w-full">
            <h3 className="text-2xl font-semibold mb-2">Spotify Clone</h3>
            <p className="text-black">
              Crafted a dynamic and user-friendly music streaming application
              using React. Integrated key functionalities such as playlist
              creation, real-time search, and seamless playback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
    const contactData = [
        {
          name: "LinkedIn",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
          link: "https://www.linkedin.com/feed/",
        },
        {
          name: "GitHub",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          link: "https://github.com/",
        },
        {
          name: "Gmail",
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
          link: "https://mail.google.com/mail/u/?authuser=er.arpitgupta1@gmail.com",
        },
      ];

  return (
    <section id="contacts" className="hero-page py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <div className="flex justify-center space-x-6">
          {contactData.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-xl p-4 flex items-center space-x-2"
            >
              <img src={contact.image} alt={contact.name} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  return (
    <div className="w-full min-h-screen bg-[#021227]">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Portfolio;
