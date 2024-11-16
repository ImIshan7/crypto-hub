import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Key, AlertTriangle, CheckCircle, Server } from 'lucide-react';

const Security = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const securityFeatures = [
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Advanced Protection",
            description: "Multi-layer security system with real-time threat detection"
        },
        {
            icon: <Lock className="w-12 h-12" />,
            title: "Secure Storage",
            description: "Cold storage solution with military-grade encryption"
        },
        {
            icon: <Key className="w-12 h-12" />,
            title: "2FA Authentication",
            description: "Additional security layer with biometric verification"
        },
        {
            icon: <Server className="w-12 h-12" />,
            title: "DDoS Protection",
            description: "Enterprise-level protection against cyber attacks"
        }
    ];

    return (
        <div id="security" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80"
                    alt="Security Background"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/90"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 gradient-text">Enterprise-Grade Security</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Your security is our top priority. We implement the highest standards of protection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {securityFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="glass-effect p-8 rounded-xl text-center hover-scale"
                        >
                            <motion.div
                                className="text-blue-400 mb-6 flex justify-center"
                                animate={{ rotateY: [0, 360] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
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
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 glass-effect rounded-xl p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-green-500 mb-4 flex justify-center"
                            >
                                <CheckCircle className="w-12 h-12" />
                            </motion.div>
                            <div className="text-3xl font-bold gradient-text">99.99%</div>
                            <div className="text-gray-400">Uptime</div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="text-blue-400 mb-4 flex justify-center"
                            >
                                <Shield className="w-12 h-12" />
                            </motion.div>
                            <div className="text-3xl font-bold gradient-text">24/7</div>
                            <div className="text-gray-400">Monitoring</div>
                        </div>
                        <div className="text-center">
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-purple-400 mb-4 flex justify-center"
                            >
                                <AlertTriangle className="w-12 h-12" />
                            </motion.div>
                            <div className="text-3xl font-bold gradient-text">0</div>
                            <div className="text-gray-400">Security Incidents</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Security;