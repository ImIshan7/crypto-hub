import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Video, FileText, Users, Lightbulb, Target, Brain, Rocket } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const Learn = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const resources = [
        {
            icon: <BookOpen className="w-12 h-12" />,
            title: "Beginner's Guide",
            description: "Master the basics of cryptocurrency trading",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80"
        },
        {
            icon: <Video className="w-12 h-12" />,
            title: "Video Tutorials",
            description: "Watch expert-led cryptocurrency tutorials",
            image: "https://images.unsplash.com/photo-1642104704074-907c0698b98d?auto=format&fit=crop&q=80"
        },
        {
            icon: <FileText className="w-12 h-12" />,
            title: "Documentation",
            description: "Detailed guides and technical resources",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80"
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "Community Forums",
            description: "Learn from experienced traders",
            image: "https://images.unsplash.com/photo-1638913662252-70efce1e60a7?auto=format&fit=crop&q=80"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <div id="learn" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_50%)]"></div>
                <motion.div
                    animate={{
                        backgroundPosition: ['0% 0%', '100% 100%'],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center mb-16"
                >
                    <motion.span variants={itemVariants} className="text-blue-500 text-lg font-semibold mb-4 block">
                        Education Center
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-5xl font-bold gradient-text mb-6">
                        <TypeAnimation
                            sequence={[
                                'Learn Cryptocurrency Trading',
                                3000,
                                'Master Blockchain Technology',
                                3000,
                                'Understand Digital Assets',
                                3000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Start your journey into the world of cryptocurrency with our comprehensive learning resources
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                            }}
                            className="glass-effect rounded-2xl overflow-hidden group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <motion.img
                                    src={resource.image}
                                    alt={resource.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 text-white">
                                    <div className="text-blue-400 mb-2">{resource.icon}</div>
                                    <h3 className="text-xl font-semibold">{resource.title}</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-gray-400">{resource.description}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-xl font-semibold"
                                >
                                    Start Learning
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    {[
                        { icon: <Lightbulb className="w-8 h-8" />, value: "100+", label: "Courses" },
                        { icon: <Target className="w-8 h-8" />, value: "50K+", label: "Students" },
                        { icon: <Brain className="w-8 h-8" />, value: "200+", label: "Experts" },
                        { icon: <Rocket className="w-8 h-8" />, value: "98%", label: "Success Rate" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="glass-effect rounded-xl p-6 text-center"
                        >
                            <div className="text-blue-400 mb-4 flex justify-center">{stat.icon}</div>
                            <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                            <div className="text-gray-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Learn;