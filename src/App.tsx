import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Mail, Github, Linkedin, Code } from 'lucide-react';
import { projects, skills, aboutMe, blogPosts } from './data';
import BlogPost from './components/BlogPost';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const Navbar = () => (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/5 dark:bg-gray-800/5 backdrop-blur-md px-6 py-3 rounded-full shadow-lg flex items-center space-x-6">
        <Link
          to="/"
          onClick={() => setActiveSection('home')}
          className={`text-sm font-medium ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400`}
        >
          Home
        </Link>
        <Link
          to="/"
          onClick={() => setActiveSection('about')}
          className={`text-sm font-medium ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400`}
        >
          About
        </Link>
        <Link
          to="/"
          onClick={() => setActiveSection('projects')}
          className={`text-sm font-medium ${activeSection === 'projects' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400`}
        >
          Projects
        </Link>
        <Link
          to="/"
          onClick={() => setActiveSection('blog')}
          className={`text-sm font-medium ${activeSection === 'blog' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400`}
        >
          Blog
        </Link>
        <Link
          to="/"
          onClick={() => setActiveSection('skills')}
          className={`text-sm font-medium ${activeSection === 'skills' ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-300'} hover:text-blue-600 dark:hover:text-blue-400`}
        >
          Skills
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>
      </div>
    </nav>
  );

  const AboutSection = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">About Me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
          {aboutMe.story}
        </p>
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Experience</h3>
        <div className="space-y-6">
          {aboutMe.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-blue-500 pl-4">
              <div className="text-sm text-blue-600 dark:text-blue-400 mb-1">{exp.period}</div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{exp.role}</h4>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ProjectsSection = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const BlogSection = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-blue-600 dark:text-blue-400">{post.date}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-800 dark:text-gray-200">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={`/blog/${post.id}`}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );

  const SkillsSection = () => (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((skillGroup) => (
          <div key={skillGroup.category} className="bg-white/5 backdrop-blur-md dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">{skillGroup.category}</h3>
            <ul className="space-y-2">
              {skillGroup.items.map((skill) => (
                <li key={skill} className="flex items-center text-gray-600 dark:text-gray-300">
                  <Code className="w-4 h-4 mr-2" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );

  const HomePage = () => (
    <div className="max-w-4xl mx-auto pt-20">
      <header className="text-center mb-16">
        <img
          src="images/img2.jpeg" 
          alt="Pyarjan Thapa"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-500 dark:ring-blue-400"
        />
        <h1 className="text-4xl font-bold mb-2 text-gray-800 dark:text-white">Pyarjan Thapa</h1>
        <p className="text-xl text-blue-600 dark:text-blue-300">-Web Developer & Designer-</p>
      </header>

      {activeSection === 'home' && (
        <>
          <AboutSection />
          <ProjectsSection />
          <BlogSection />
          <SkillsSection />
        </>
      )}
      {activeSection === 'about' && <AboutSection />}
      {activeSection === 'projects' && <ProjectsSection />}
      {activeSection === 'blog' && <BlogSection />}
      {activeSection === 'skills' && <SkillsSection />}

      <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Connect With Me</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="mailto:thapapyarjan72@gmail.com"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Pyarjan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/pyarjan-thapa-66019b286/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  );

  return (
    <Router>
      {/* <div className={`min-h-screen p-8 transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'}`}> */}

      <div className={`min-h-screen p-8 transition-colors duration-200 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-100'} bg-[length:40px_40px] ${darkMode ? 'bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)]' : 'bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]'}`}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;