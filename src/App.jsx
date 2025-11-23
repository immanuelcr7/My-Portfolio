import React from "react";

// -------- DATA SECTION (EDIT WITH YOUR DETAILS) --------
const data = {
  name: "IMMANUEL D",
  title: "Cybersecurity Learner · Aspiring Ethical Hacker",
  about: `I'm a cybersecurity student learning networking, Linux, Python and web security. This portfolio shows my learning journey, small projects, and labs (TryHackMe / CTFs).`,
  skills: [
    "Linux",
    "Python",
    "Networking",
    "Web Security",
    "Wireshark",
    "Basic Scripting",
  ],
  projects: [
    {
      title: "Password Strength Checker",
      desc: "A small Python/JS tool that checks password entropy and common patterns.",
      tech: ["Python", "JS"],
    },
    {
      title: "Port Scanner (Learning)",
      desc: "Simple port scanner to explore open ports on local network (educational).",
      tech: ["Python", "Sockets"],
    },
    {
      title: "TryHackMe Walkthroughs",
      desc: "Writeups and screenshots for rooms I completed.",
      tech: ["Writeups", "Screenshots"],
    },
  ],
  contact: {
    email: "immandhinakaran1115@gmail.com",
    linkedin: "https://www.linkedin.com/in/imman-d",
    github: "https://github.com/immanuelcr7",
  },
};

// -------- SMALL BADGE COMPONENT --------
function Badge({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-0.5 mr-2 rounded-md bg-gray-800/60 border border-gray-700">
      {children}
    </span>
  );
}

// -------- MAIN APP COMPONENT --------
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-gray-900 text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto p-6">
        
        {/* HEADER */}
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-cyan-300">
              {data.name}
            </h1>
            <p className="text-sm text-gray-400">{data.title}</p>
          </div>

          {/* NAVIGATION */}
          <nav className="space-x-4 hidden md:block">
            <a href="#about" className="text-sm text-gray-300 hover:text-cyan-200">About</a>
            <a href="#projects" className="text-sm text-gray-300 hover:text-cyan-200">Projects</a>
            <a href="#skills" className="text-sm text-gray-300 hover:text-cyan-200">Skills</a>
            <a href="#contact" className="text-sm text-gray-300 hover:text-cyan-200">Contact</a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section className="mb-10 p-6 rounded-2xl border border-gray-800 bg-gradient-to-br from-zinc-900/40 to-black/40 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* LEFT SIDE HERO TEXT */}
            <div>
              <h2 className="text-xl font-bold text-white">
                Hi, I'm {data.name} 👋
              </h2>
              <p className="mt-3 text-gray-300 max-w-xl">{data.about}</p>

              <div className="mt-4">
                <a
                  href="#projects"
                  className="inline-block px-4 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 text-black font-medium"
                >
                  View projects
                </a>
              </div>
            </div>

            {/* RIGHT SIDE TERMINAL BOX */}
            <div className="w-full md:w-72 bg-black border border-gray-800 rounded-lg shadow-inner p-3 font-mono text-xs text-green-300">
              <div className="h-3 mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
              </div>
              <pre className="whitespace-pre-wrap">
$ whoami
{data.name}
$ pwd
/home/{data.name.toLowerCase().split(" ")[0]}
$ ls -la
Projects  Resume.pdf  TryHackMe
              </pre>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Skills</h3>
          <div className="flex flex-wrap">
            {data.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Projects & Labs</h3>

          <div className="space-y-4">
            {data.projects.map((project) => (
              <article
                key={project.title}
                className="p-4 border border-gray-800 rounded-lg bg-gradient-to-b from-zinc-900/30 to-transparent"
              >
                <h4 className="font-semibold text-white">{project.title}</h4>
                <p className="text-sm text-gray-300 mt-1">{project.desc}</p>

                <div className="mt-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-2">About Me</h3>
          <p className="text-gray-300">{data.about}</p>
        </section>

        {/* CONTACT SECTION */}
        <footer id="contact" className="mt-10 p-4 border-t border-gray-800">
          <h3 className="text-sm font-medium text-white mb-2">Contact</h3>

          <p className="text-gray-300 text-sm">
            Email:{" "}
            <a href={`mailto:${data.contact.email}`} className="underline text-cyan-200">
              {data.contact.email}
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            GitHub:{" "}
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="underline text-cyan-200"
            >
              {data.contact.github}
            </a>
          </p>
          <p className="text-gray-300 text-sm">
            LinkedIn:{" "}
            <a
              href={data.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline text-cyan-200"
            >
              {data.contact.linkedin}
            </a>
          </p>

          <div className="mt-4 text-xs text-gray-500">
            Tip: Add screenshots and write short writeups for each TryHackMe room or CTF challenge. Recruiters love that.
          </div>
        </footer>
      </div>
    </div>
  );
}
