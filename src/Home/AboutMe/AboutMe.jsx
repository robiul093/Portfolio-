
const AboutMe = () => {
    return (
        <section id="about-me" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center">
                {/* Image Section */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img
                        src="https://via.placeholder.com/300" // Replace with your image URL
                        alt="Your Name"
                        className="rounded-full shadow-lg w-64 h-64 object-cover"
                    />
                </div>

                {/* Text Content Section */}
                <div className="w-full md:w-1/2 md:pl-10">
                    {/* Heading */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

                    {/* Brief Introduction */}
                    <p className="text-gray-700 mb-6">
                        I’m [Your Name], currently a 4th-year student pursuing a BSc Honors in Mathematics at the National University. My passion for problem-solving led me to front-end development, where I enjoy creating interactive and responsive web applications using React. With a blend of analytical skills from my mathematics background and creativity in coding, I’m always eager to learn and grow as a developer. I aim to build user-friendly digital experiences that make a difference.
                    </p>

                    {/* Skills Section */}
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">JavaScript</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">HTML</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">CSS</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Tailwind CSS</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">React Router</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Firebase</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Swiper Slider</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">MongoDB CRUD</span>
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