import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bitcoin } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuItems = [
        { label: 'Home', href: '#home' },
        { label: 'Market', href: '#market' },
        { label: 'Learn', href: '#learn' },
        { label: 'News', href: '#news' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Community', href: '#community' },
        { label: 'Security', href: '#security' },
        { label: 'About', href: '#about' },
        { label: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const navHeight = 80; // Height of the navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        <motion.div
                            className="flex items-center space-x-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Bitcoin className="w-8 h-8 text-blue-500" />
                            <span className="text-xl font-bold gradient-text">CryptoHub</span>
                        </motion.div>

                        <div className="hidden md:flex items-center space-x-8">
                            {menuItems.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(item.href);
                                    }}
                                    className="text-gray-300 hover:text-white transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowAuthModal(true)}
                                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                            >
                                Sign In
                            </motion.button>
                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-gray-300 hover:text-white"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden glass-effect"
                        >
                            <div className="container mx-auto px-4 py-4">
                                {menuItems.map((item) => (
                                    <motion.a
                                        key={item.label}
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection(item.href);
                                        }}
                                        className="block py-2 text-gray-300 hover:text-white transition-colors"
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                                <motion.button
                                    className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all"
                                    onClick={() => {
                                        setIsOpen(false);
                                        setShowAuthModal(true);
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Sign In
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
        </>
    );
};

export default Navbar;