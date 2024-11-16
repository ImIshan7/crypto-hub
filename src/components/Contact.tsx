import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MessageCircle, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email Support",
            value: "support@cryptohub.com",
            description: "24/7 Support Available"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "Live Chat",
            value: "Available 24/7",
            description: "Instant Response Time"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone Support",
            value: "+1 (555) 123-4567",
            description: "Mon-Fri 9AM-6PM EST"
        }
    ];

    return (
        <div id="contact" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
                    alt="Contact Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have questions? We're here to help 24/7. Reach out through any of our support channels.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="glass-effect p-8 rounded-xl hover-scale"
                        >
                            <div className="text-blue-400 mb-4 flex justify-center">
                                {method.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                            <p className="text-blue-400 mb-2">{method.value}</p>
                            <p className="text-gray-400">{method.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="max-w-4xl mx-auto glass-effect rounded-xl p-8"
                >
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors"
                                placeholder="Your email"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                Message
                            </label>
                            <textarea
                                className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 transition-colors h-32"
                                placeholder="Your message"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                            >
                                <span>Send Message</span>
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;