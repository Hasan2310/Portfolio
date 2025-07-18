import { Github, Instagram, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_st0b5wg', 'template_s632978', formRef.current, 'x-5y84mquBDkYaJ02')
      .then(
        (result) => {
          console.log(result.text);
          setStatus('success');
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        }
      );
  };

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => {
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#0f0f0f] text-white px-4 py-12" id="contact">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-start gap-12">

        {/* LEFT: Title + Form */}
        <div className="flex-1 space-y-6 px-4 mx-auto w-full">
          <motion.h2
            className="text-3xl md:text-6xl font-bold uppercase text-anton"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="w-full bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg space-y-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message here..."
                className="w-full px-4 py-2 bg-white/5 text-white border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center items-center gap-2 px-4 py-2 bg-purple-800 hover:bg-purple-900 text-white font-semibold rounded-md transition duration-300"
            >
              <Send size={18} /> Send Message
            </button>

            {/* Status Feedback */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-3 text-sm text-white font-medium tracking-wide"
              >
                Your message has been sent successfully.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-3 text-sm text-white font-medium tracking-wide"
              >
                Something went wrong. Please try again later.
              </motion.p>
            )}
          </motion.form>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="flex-1 flex justify-center items-center px-4 mx-auto">
          <div className="h-full flex justify-center items-center gap-6 md:mt-50 sm:mt-0">
            {[
              {
                href: "https://github.com/Hasan2310",
                icon: <Github size={28} />,
                hoverClass: "group-hover:text-gray-300",
              },
              {
                href: "https://instagram.com/san.lbh",
                icon: <Instagram size={28} />,
                hoverClass: "group-hover:text-pink-500",
              },
              {
                href: "https://id.linkedin.com/in/hasan-ahmad-halibah-6ba2b830b",
                icon: <Linkedin size={28} />,
                hoverClass: "group-hover:text-sky-500",
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group [perspective:1000px]"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true }}
              >
                <div
                  className="backdrop-blur-md bg-white/10 p-4 rounded-xl shadow-md transition-all duration-300
                  transform rotate-x-6 rotate-y-3 group-hover:-translate-y-2 group-hover:scale-105
                  group-hover:rotate-x-0 group-hover:rotate-y-0"
                >
                  <div className={`text-white ${item.hoverClass} transition`}>
                    {item.icon}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
