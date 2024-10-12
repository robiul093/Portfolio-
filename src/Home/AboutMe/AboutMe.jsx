import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFirebase, SiMongodb } from 'react-icons/si';
import image from "../../assets/pexels-goumbik-574073.jpg"

const AboutMe = () => {
    return (
        <section id="about-me" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={image}
            alt=""
            className="rounded-full shadow-lg w-[400px] h-[400px] object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 md:pl-10">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          
          {/* Brief Introduction */}
          <p className="text-gray-700 mb-6 text-justify text-lg">
            I’m [Your Name], currently a 4th-year student pursuing a BSc Honors in Mathematics at the National University. My passion for problem-solving led me to front-end development, where I enjoy creating interactive and responsive web applications using React. With a blend of analytical skills from my mathematics background and creativity in coding, I’m always eager to learn and grow as a developer. I aim to build user-friendly digital experiences that make a difference.
          </p>

          {/* Skills Section */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                <FaReact size={30} className="text-blue-500" />
                <span>React</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                <FaJs size={30} className="text-yellow-500" />
                <span>JavaScript</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-orange-100 text-orange-800 rounded-full">
                <FaHtml5 size={30} className="text-orange-500" />
                <span>HTML</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                <FaCss3Alt size={30} className="text-blue-700" />
                <span>CSS</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-teal-100 text-teal-800 rounded-full">
                <SiTailwindcss size={30} className="text-teal-500" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full">
                <SiFirebase size={30} className="text-yellow-500" />
                <span>Firebase</span>
              </div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
                <SiMongodb size={30} className="text-green-500" />
                <span>MongoDB CRUD</span>
              </div>
            </div>
          </div>

          {/* Personal Touch */}
          <p className="text-gray-700 italic">
            "Coding for me is not just about building websites; it's about solving real-world problems and creating seamless digital experiences. I thrive on challenges and am constantly looking for opportunities to learn new technologies and improve my craft."
          </p>
        </div>
      </div>
    </section>
    );
};

export default AboutMe;