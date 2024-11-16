import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PieChart, BarChart2, ArrowUpRight, ArrowDownRight, Wallet, History, TrendingUp, TrendingDown } from 'lucide-react';

const Portfolio = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const assets = [
        { name: 'Bitcoin', amount: '2.5 BTC', value: '$112,500', change: '+3.2%', profit: true },
        { name: 'Ethereum', amount: '15 ETH', value: '$48,000', change: '-1.5%', profit: false },
        { name: 'Cardano', amount: '5000 ADA', value: '$6,000', change: '+2.8%', profit: true },
        { name: 'Solana', amount: '100 SOL', value: '$25,000', change: '+5.2%', profit: true },
    ];

    return (
        <div id="portfolio" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80"
                    alt="Portfolio Background"
                    className="w-full h-full object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900/90"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Portfolio Overview */}
                    <div className="lg:col-span-2">
                        <div className="glass-effect rounded-xl p-6 mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-2xl font-bold gradient-text">Portfolio Overview</h2>
                                <PieChart className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <motion.div
                                    className="glass-effect rounded-lg p-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-gray-400 mb-1">Total Balance</p>
                                    <p className="text-2xl font-bold gradient-text">$166,500</p>
                                    <div className="flex items-center text-green-500 mt-2">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        <span>+12.5%</span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    className="glass-effect rounded-lg p-4"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <p className="text-gray-400 mb-1">24h Change</p>
                                    <p className="text-2xl font-bold text-green-500">+$5,230</p>
                                    <div className="flex items-center text-green-500 mt-2">
                                        <TrendingUp className="w-4 h-4 mr-1" />
                                        <span>+3.2%</span>
                                    </div>
                                </motion.div>
                            </div>
                            <div className="relative h-64 glass-effect rounded-lg p-4">
                                <BarChart2 className="w-full h-full text-blue-400 opacity-50" />
                            </div>
                        </div>

                        {/* Assets List */}
                        <div className="space-y-4">
                            {assets.map((asset, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-effect rounded-xl p-6 hover:bg-white/5 transition-colors"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-semibold">{asset.name}</h3>
                                            <p className="text-gray-400">{asset.amount}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-semibold gradient-text">{asset.value}</p>
                                            <p className={`flex items-center ${asset.profit ? 'text-green-500' : 'text-red-500'}`}>
                                                {asset.profit ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                                                {asset.change}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Side Panel */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="glass-effect rounded-xl p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold gradient-text">Quick Actions</h3>
                                <Wallet className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="space-y-4">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg transition-all"
                                >
                                    Deposit
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full glass-effect text-white py-3 rounded-lg transition-all"
                                >
                                    Withdraw
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full glass-effect text-white py-3 rounded-lg transition-all"
                                >
                                    Trade
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="glass-effect rounded-xl p-6"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-semibold gradient-text">Recent Activity</h3>
                                <History className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="space-y-4">
                                {[
                                    { action: 'Bought BTC', time: '2 hours ago', amount: '+0.05 BTC', profit: true },
                                    { action: 'Sold ETH', time: '5 hours ago', amount: '-2.5 ETH', profit: false },
                                    { action: 'Bought SOL', time: '1 day ago', amount: '+10 SOL', profit: true }
                                ].map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center justify-between py-2 border-b border-gray-700/50"
                                    >
                                        <div>
                                            <p className="font-medium">{activity.action}</p>
                                            <p className="text-sm text-gray-400">{activity.time}</p>
                                        </div>
                                        <p className={activity.profit ? 'text-green-500' : 'text-red-500'}>
                                            {activity.amount}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;