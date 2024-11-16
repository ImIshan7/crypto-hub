import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, TrendingDown, Star, BarChart2 } from 'lucide-react';

const cryptos = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: '$45,000',
        change: '+2.5%',
        volume: '$28B',
        marketCap: '$850B',
        graph: 'up',
        positive: true,
        image: 'https://images.unsplash.com/photo-1519162584292-56dfc9eb5db4?auto=format&fit=crop&q=80&w=100'
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        price: '$3,200',
        change: '+1.8%',
        volume: '$15B',
        marketCap: '$380B',
        graph: 'up',
        positive: true,
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=100'
    },
    {
        name: 'Cardano',
        symbol: 'ADA',
        price: '$1.20',
        change: '-0.5%',
        volume: '$5B',
        marketCap: '$40B',
        graph: 'down',
        positive: false,
        image: 'https://images.unsplash.com/photo-1622630998477-20aa696ecb05?auto=format&fit=crop&q=80&w=100'
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        price: '$120',
        change: '+3.2%',
        volume: '$8B',
        marketCap: '$45B',
        graph: 'up',
        positive: true,
        image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=100'
    }
];

const CryptoList = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
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
        <div id="market" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_50%)]"></div>
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
                        Market Overview
                    </motion.span>
                    <motion.h2 variants={itemVariants} className="text-5xl font-bold gradient-text mb-6">
                        Popular Cryptocurrencies
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Track real-time prices of the most popular cryptocurrencies
                    </motion.p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="glass-effect rounded-2xl p-6 overflow-x-auto"
                >
                    <table className="w-full min-w-[800px]">
                        <thead>
                        <tr className="text-left border-b border-gray-700">
                            <th className="py-4 px-4 text-gray-400 font-semibold">#</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">Name</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">Price</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">24h Change</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">Volume</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">Market Cap</th>
                            <th className="py-4 px-4 text-gray-400 font-semibold">Graph</th>
                        </tr>
                        </thead>
                        <tbody>
                        {cryptos.map((crypto, index) => (
                            <motion.tr
                                key={index}
                                variants={itemVariants}
                                className="border-b border-gray-700/50 hover:bg-white/5 transition-colors"
                            >
                                <td className="py-4 px-4">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                </td>
                                <td className="py-4 px-4">
                                    <div className="flex items-center space-x-3">
                                        <img
                                            src={crypto.image}
                                            alt={crypto.name}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div>
                                            <div className="font-semibold">{crypto.name}</div>
                                            <div className="text-sm text-gray-400">{crypto.symbol}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-4 font-semibold">{crypto.price}</td>
                                <td className="py-4 px-4">
                                    <div className={`flex items-center ${crypto.positive ? 'text-green-500' : 'text-red-500'}`}>
                                        {crypto.positive ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                                        {crypto.change}
                                    </div>
                                </td>
                                <td className="py-4 px-4 text-gray-400">{crypto.volume}</td>
                                <td className="py-4 px-4 text-gray-400">{crypto.marketCap}</td>
                                <td className="py-4 px-4">
                                    <div className={`w-20 h-10 ${crypto.graph === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                        <BarChart2 className="w-full h-full" />
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                        </tbody>
                    </table>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="mt-8 text-center"
                >
                    <motion.button
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold"
                    >
                        View All Markets
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default CryptoList;