import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, ArrowRight } from 'lucide-react';

const News = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const news = [
        {
            title: "Bitcoin Reaches New All-Time High",
            category: "Market Update",
            date: "2 hours ago",
            image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=200"
        },
        {
            title: "Ethereum 2.0 Upgrade: What You Need to Know",
            category: "Technology",
            date: "5 hours ago",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=200"
        },
        {
            title: "New Regulations for Cryptocurrency Trading",
            category: "Regulation",
            date: "1 day ago",
            image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <div id="news" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Latest Crypto News</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Stay updated with the latest cryptocurrency news and market trends
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span className="bg-blue-500/10 text-blue-400 px-2 py-1 rounded">
                    {item.category}
                  </span>
                                    <div className="flex items-center ml-4">
                                        <Clock className="w-4 h-4 mr-1" />
                                        {item.date}
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                                <a href="#" className="inline-flex items-center text-blue-400 hover:text-blue-300">
                                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;