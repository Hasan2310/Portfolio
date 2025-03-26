import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaGithub, FaInstagram, FaTelegramPlane } from 'react-icons/fa';

const Email = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_st0b5wg', 'template_s632978', e.target, 'x-5y84mquBDkYaJ02') 
            .then(
                (result) => {
                    setStatus('Message sent successfully!');
                    setFormData({ name: '', email: '', message: '' });
                },
                (error) => {
                    setStatus('Failed to send message, please try again.');
                }
            );
    };

    return (
        <div>
                <h1 className="text-3xl md:text-5xl sm:text-center md:text-start text-center font-bold italic">Contact Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 justify-center items-center">
                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 bg-gray-100 rounded-lg shadow-md w-sm md:w-lg">
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg text-gray-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700" htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full p-2 mt-2 border border-gray-300 rounded-lg text-gray-500"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
                        >
                            Send Message
                        </button>

                        {status && (
                            <div className="mt-4 text-center text-gray-700">
                                {status}
                            </div>
                        )}
                    </form>

                    {/* Social Media Icons */}
                    <div className="flex items-center justify-center space-x-5 mt-10 md:mt-0">
                        <a href="https://github.com/Hasan2310/" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-5xl text-white hover:text-gray-600" />
                        </a>
                        <a href="https://www.instagram.com/san.lbh" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-5xl text-white hover:text-gray-600" />
                        </a>
                        <a href="https://t.me/Sann2310" target="_blank" rel="noopener noreferrer">
                            <FaTelegramPlane className="text-5xl text-white hover:text-gray-600" />
                        </a>
                    </div>
                </div>
        </div>
    );
};

export default Email;
