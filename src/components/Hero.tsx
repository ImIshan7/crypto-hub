import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Bitcoin, Wallet, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative min-h-screen overflow-hidden">
            {/* Dynamic Background with Lighting Effects */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ scale: 1.2, opacity: 0.5 }}
                    animate={{
                        scale: [1.2, 1.3, 1.2],
                        opacity: [0.5, 0.6, 0.5]
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
                        alt="Bitcoin Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Enhanced Lighting Effects */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_70%)]"></div>

                {/* Animated Glow Effect */}
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
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"
                ></motion.div>
            </div>

            <div className="relative container mx-auto px-4 pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h1
                        className="text-7xl md:text-8xl font-bold mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
            <span className="gradient-text">
              <TypeAnimation
                  sequence={[
                      'Trade Crypto',
                      2000,
                      'Invest Smart',
                      2000,
                      'Secure Future',
                      2000,
                      'Build Wealth',
                      2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
              />
            </span>
                    </motion.h1>

                    <motion.p
                        className="text-2xl mb-12 text-gray-200"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Your Gateway to Digital Asset Trading and Investment
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row justify-center gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all text-lg"
                        >
                            <span>Start Trading Now</span>
                            <ArrowRight className="w-6 h-6" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white/30 hover:border-white/50 text-white px-10 py-4 rounded-full font-semibold transition-all text-lg backdrop-blur-sm"
                        >
                            Explore Features
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    {[
                        { icon: <Bitcoin className="w-12 h-12" />, title: "Digital Currency", desc: "Trade multiple cryptocurrencies", color: "blue" },
                        { icon: <Wallet className="w-12 h-12" />, title: "Secure Wallet", desc: "Advanced security measures", color: "purple" },
                        { icon: <Shield className="w-12 h-12" />, title: "Protected Assets", desc: "Insurance-backed protection", color: "pink" }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-effect p-8 rounded-2xl hover-scale backdrop-blur-lg bg-white/10"
                            whileHover={{
                                y: -10,
                                boxShadow: `0 20px 40px -20px rgba(var(--${item.color}-500-rgb), 0.5)`
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                        >
                            <div className={`text-${item.color}-400 mb-6`}>{item.icon}</div>
                            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-lg">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;