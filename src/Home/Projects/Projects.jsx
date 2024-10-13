import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import portfolio from "../../assets/portfolio.png"
import surveyHub from "../../assets/surveyHub.png"

const projects = [
  {
    title: 'SurveyHub',
    description: 'A dynamic survey platform where users can create, vote, and comment on surveys. Built with React, Tailwind CSS, Firebase, and Stripe.',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Stripe'],
    image: `${surveyHub}`,
    demoLink: 'https://assignment-12-33727.web.app/',
    codeLink: 'https://github.com/robiul093/assignment-12-client',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects and skills, developed using React and Tailwind CSS.',
    technologies: ['React', 'Tailwind CSS'],
    image: `${portfolio}`,
    demoLink: 'https://portfolio-robiul.netlify.app/',
    codeLink: 'https://github.com/robiul093/Portfolio-',
  },
  // Add more projects as needed
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={project?.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex items-center justify-between ">
                                <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn border-2 border-blue-700 mt-3  text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                                >
                                    <FaExternalLinkAlt size={18} />
                                    <span>Live Demo</span>
                                </a>
                                <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn border-2 border-blue-700 mt-3  text-gray-600 hover:text-gray-800 flex items-center space-x-1"
                                >
                                    <FaGithub size={18} />
                                    <span>Source Code</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;