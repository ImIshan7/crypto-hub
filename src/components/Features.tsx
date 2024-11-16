import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Lock, BookOpen, Coins, Zap, Globe, Shield, Users } from 'lucide-react';

const Features = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Advanced Trading",
            description: "Professional-grade trading tools and real-time market analysis",
            color: "blue"
        },
        {
            icon: <Lock className="w-8 h-8" />,
            title: "Bank-Grade Security",
            description: "Multi-signature wallets and advanced encryption protocols",
            color: "green"
        },
        {
            icon: <BookOpen className="w-8 h-8" />,
            title: "Expert Resources",
            description: "Comprehensive educational content and market insights",
            color: "purple"
        },
        {
            icon: <Coins className="w-8 h-8" />,
            title: "Multiple Assets",
            description: "Trade hundreds of cryptocurrency pairs",
            color: "yellow"
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Instant Execution",
            description: "Lightning-fast trade execution and settlement",
            color: "orange"
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Global Access",
            description: "Trade from anywhere, anytime with our mobile apps",
            color: "teal"
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Asset Insurance",
            description: "Your digital assets are protected up to $100M",
            color: "red"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "24/7 Support",
            description: "Round-the-clock customer service in multiple languages",
            color: "indigo"
        }
    ];

    return (
        <div className="relative py-24 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0.3 }}
                    animate={{
                        scale: [1.1, 1.15, 1.1],
                        opacity: [0.3, 0.4, 0.3]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
                        alt="Features Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
            </div>

            {/* Animated Gradient Overlays */}
            <div className="absolute inset-0">
                <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black"></div>
                <motion.div
                    animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"
                ></motion.div>
                <motion.div
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1.1, 1, 1.1]
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_70%)]"
                ></motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="text-blue-500 text-lg font-semibold mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        className="text-5xl font-bold gradient-text mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        The Most Trusted Cryptocurrency Platform
                    </motion.h2>
                    <motion.p
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Experience the next generation of crypto trading with our cutting-edge features
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
                            }}
                            className="glass-effect backdrop-blur-lg bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300"
                        >
                            <motion.div
                                className={`text-${feature.color}-500 mb-6`}
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                {feature.icon}
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all"
                    >
                        Start Trading Now
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Features;