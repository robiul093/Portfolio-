import { useState } from "react";
import { SiGmail } from "react-icons/si";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here (e.g., send to email or API)
        alert('Message sent!'); // Placeholder alert
        setFormData({ name: '', email: '', message: '' }); // Reset form
    };

    return (
        <section id="contact" className="py-16 bg-gray-100">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Me</h2>
                <div className="flex flex-col md:flex-row md:gap-10">
                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/2 mt-8 md:mt-0">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
                        <p className="text-gray-700 mb-2 text-lg">Feel free to reach out via the form or through social media:</p>
                        <div className="mt-5">
                            <div className="card bg-neutral bg-opacity-70
                             text-neutral-content md:w-96">
                                <div className="card-body items-center text-center">
                                    <SiGmail></SiGmail>
                                    <h2 className="card-title">Email:</h2>
                                    <p>robihasan093@gmail.com</p>
                                    <a href="mailto:robihasan093@gmail.com" className="text-blue-500 hover:underline">Send Massage</a>
                                </div>
                            </div>
                            
                        </div>
                        {/* <p className="text-gray-700 mb-2">Email: <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">your-email@example.com</a></p>
                        <div className="flex space-x-4">
                            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                            <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;