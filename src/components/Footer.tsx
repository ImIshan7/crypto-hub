import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, Twitter, Github, Linkedin, Instagram, Youtube, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#careers' },
            { name: 'Press Kit', href: '#press' },
            { name: 'Contact', href: '#contact' }
        ],
        products: [
            { name: 'Exchange', href: '#exchange' },
            { name: 'Trading API', href: '#api' },
            { name: 'Mobile App', href: '#mobile' },
            { name: 'Wallet', href: '#wallet' }
        ],
        support: [
            { name: 'Help Center', href: '#help' },
            { name: 'Status', href: '#status' },
            { name: 'Bug Bounty', href: '#bugs' },
            { name: 'Documentation', href: '#docs' }
        ],
        legal: [
            { name: 'Privacy Policy', href: '#privacy' },
            { name: 'Terms of Service', href: '#terms' },
            { name: 'Cookie Policy', href: '#cookies' },
            { name: 'Compliance', href: '#compliance' }
        ]
    };

    const socialLinks = [
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <Github className="w-5 h-5" />, href: '#', label: 'Github' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-black to-gray-900 pt-20 pb-10 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_70%)]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.div
                            className="flex items-center space-x-2 mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Bitcoin className="w-8 h-8 text-blue-500" />
                            <span className="text-xl font-bold gradient-text">CryptoHub</span>
                        </motion.div>
                        <p className="text-gray-400 mb-6">
                            The most trusted cryptocurrency platform. Buy, trade, and store digital assets with confidence.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    className="glass-effect p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1, rotate: 10 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    {Object.entries(footerLinks).map(([category, links], index) => (
                        <div key={category}>
                            <h3 className="text-lg font-semibold mb-4 text-white capitalize">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link, linkIndex) => (
                                    <motion.li
                                        key={linkIndex}
                                        whileHover={{ x: 5 }}
                                    >
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors inline-flex items-center group"
                                        >
                                            {link.name}
                                            <ArrowUpRight className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="glass-effect rounded-xl p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex items-center space-x-4"
                        >
                            <Mail className="w-6 h-6 text-blue-400" />
                            <div>
                                <h4 className="text-white font-medium">Email Us</h4>
                                <p className="text-gray-400">support@cryptohub.com</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex items-center space-x-4"
                        >
                            <Phone className="w-6 h-6 text-purple-400" />
                            <div>
                                <h4 className="text-white font-medium">Call Us</h4>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex items-center space-x-4"
                        >
                            <MapPin className="w-6 h-6 text-pink-400" />
                            <div>
                                <h4 className="text-white font-medium">Location</h4>
                                <p className="text-gray-400">New York, NY 10001</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                        © {new Date().getFullYear()} CryptoHub. All rights reserved.
                    </p>
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-effect px-6 py-2 rounded-full text-white flex items-center space-x-2 hover:bg-white/10 transition-colors"
                    >
                        Back to Top
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;