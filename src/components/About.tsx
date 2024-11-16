import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, Globe, Zap } from 'lucide-react';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { icon: <Users className="w-8 h-8" />, value: "1M+", label: "Active Users" },
        { icon: <Globe className="w-8 h-8" />, value: "150+", label: "Countries" },
        { icon: <Zap className="w-8 h-8" />, value: "$10B+", label: "Trading Volume" }
    ];

    return (
        <div className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-6">About CryptoHub</h2>
                        <p className="text-gray-400 mb-8">
                            CryptoHub is a leading cryptocurrency platform that provides secure, reliable, and user-friendly services for trading digital assets. Our mission is to make cryptocurrency accessible to everyone while maintaining the highest standards of security and compliance.
                        </p>

                        <div className="grid grid-cols-3 gap-8 mb-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.2 }}
                                    className="text-center"
                                >
                                    <div className="text-blue-400 mb-2 flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors">
                            Learn More
                        </button>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-xl overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
                                alt="About CryptoHub"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;