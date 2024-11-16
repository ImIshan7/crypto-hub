import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, Users, TrendingUp, Award, Globe, Heart } from 'lucide-react';

const Community = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const discussions = [
        {
            title: "Bitcoin Price Prediction 2024",
            author: "CryptoExpert",
            avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=50",
            replies: 156,
            views: "2.3k",
            hot: true
        },
        {
            title: "Best DeFi Projects to Watch",
            author: "DeFiMaster",
            avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=50",
            replies: 89,
            views: "1.5k",
            hot: false
        },
        {
            title: "NFT Market Analysis",
            author: "NFTCollector",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=50",
            replies: 234,
            views: "3.1k",
            hot: true
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div id="community" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
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
                    <motion.span
                        variants={itemVariants}
                        className="text-blue-500 text-lg font-semibold mb-4 block"
                    >
                        Join Our Community
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl font-bold gradient-text mb-6"
                    >
                        Connect with Crypto Enthusiasts
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className="text-xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Join a thriving community of traders, investors, and crypto enthusiasts
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Community Stats */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="lg:col-span-2 space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <div className="grid grid-cols-3 gap-6 mb-8">
                                <div className="text-center">
                                    <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                                    <div className="text-3xl font-bold gradient-text">50K+</div>
                                    <div className="text-gray-400">Active Members</div>
                                </div>
                                <div className="text-center">
                                    <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                                    <div className="text-3xl font-bold gradient-text">150+</div>
                                    <div className="text-gray-400">Countries</div>
                                </div>
                                <div className="text-center">
                                    <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                                    <div className="text-3xl font-bold gradient-text">1M+</div>
                                    <div className="text-gray-400">Community Posts</div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                {discussions.map((discussion, index) => (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white/5 rounded-xl p-6 transition-all"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={discussion.avatar}
                                                    alt={discussion.author}
                                                    className="w-12 h-12 rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-semibold text-lg">{discussion.title}</h4>
                                                    <p className="text-gray-400">by {discussion.author}</p>
                                                </div>
                                            </div>
                                            {discussion.hot && (
                                                <span className="bg-red-500/20 text-red-400 text-sm px-3 py-1 rounded-full">
                          HOT
                        </span>
                                            )}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-400 mt-4">
                                            <MessageCircle className="w-4 h-4 mr-1" />
                                            <span>{discussion.replies} replies</span>
                                            <span className="mx-2">•</span>
                                            <TrendingUp className="w-4 h-4 mr-1" />
                                            <span>{discussion.views} views</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Join Section */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="space-y-6"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <h3 className="text-2xl font-bold mb-6 gradient-text">Join Today</h3>
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold"
                                >
                                    Create Account
                                </motion.button>
                                <div className="text-center text-gray-400">or</div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full border border-gray-700 hover:border-gray-600 text-white py-3 rounded-xl font-semibold"
                                >
                                    Browse as Guest
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="glass-effect rounded-2xl p-8"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold gradient-text">Top Contributors</h3>
                                <Award className="w-6 h-6 text-yellow-400" />
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map((_, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center space-x-4"
                                    >
                                        <img
                                            src={`https://images.unsplash.com/photo-${1590000000000 + index}?auto=format&fit=crop&q=80&w=50`}
                                            alt={`Contributor ${index + 1}`}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <div>
                                            <p className="font-medium">Crypto Expert {index + 1}</p>
                                            <p className="text-sm text-blue-400">500+ contributions</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Community;