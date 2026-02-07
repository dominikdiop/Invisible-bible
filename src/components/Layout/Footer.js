import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faTwitter,
    faInstagram,
    faYoutube,
    faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function Footer({ theme }) {
    const currentYear = new Date().getFullYear();
    const donationUrl = "https://meccatochrist.churchcenter.com/giving/to/invisible-bible";

    const socialLinks = [
        {
            icon: faFacebookF,
            url: 'https://www.facebook.com/search/top?q=mecca%20to%20christ%20international',
            label: 'Facebook',
            color: 'hover:text-blue-400'
        },
        {
            icon: faTwitter,
            url: 'https://x.com/mecca2christ',
            label: 'X',
            color: 'hover:text-blue-300'
        },
        {
            icon: faInstagram,
            url: 'https://www.instagram.com/mecca_to_christ/',
            label: 'Instagram',
            color: 'hover:text-pink-400'
        },
        {
            icon: faYoutube,
            url: 'https://www.youtube.com/@MBBs.Academy777',
            label: 'YouTube',
            color: 'hover:text-red-400'
        },
        {
            icon: faWhatsapp,
            url: 'https://wa.link/dqcnj9',
            label: 'WhatsApp',
            color: 'hover:text-green-400'
        },
        {
            icon: faEnvelope,
            url: 'mailto:info@meccatochrist.org',
            label: 'Email',
            color: 'hover:text-cyan-400'
        }
    ];

    return (
        <footer className={`border-t mt-20 transition-colors duration-300 ${
            theme === 'dark'
                ? 'border-blue-500/30 bg-gradient-to-b from-gray-900/80 to-gray-900 text-blue-300'
                : 'border-purple-200 bg-white/80 text-black'
        }`}>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img 
                                src="/images/about/neonn.png" 
                                alt='Invisible Bible Logo' 
                                width={100} 
                                height={100}
                                className={`transition-all duration-300 ${theme === 'dark' ? 'brightness-110' : ''}`}
                            />
                        </div>
                        <p className={`text-sm font-medium transition-colors ${
                            theme === 'dark' ? 'text-blue-300' : 'text-gray-700'
                        }`}>
                            The Book No One Can See
                        </p>
                        <p className={`text-sm italic transition-colors ${
                            theme === 'dark' ? 'text-blue-200' : 'text-gray-600'
                        }`}>
                            "In the unseen lies the true."
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={`text-lg font-bold mb-4 transition-colors ${
                            theme === 'dark' ? 'text-cyan-300' : 'text-black'
                        }`}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Books', 'Digital', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                                        className={`transition-colors hover:scale-105 inline-block ${
                                            theme === 'dark'
                                                ? 'text-blue-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                                                : 'text-gray-700 hover:text-purple-600'
                                        }`}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href={donationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors hover:scale-105 inline-block ${
                                        theme === 'dark'
                                            ? 'text-blue-300 hover:text-cyan-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]'
                                            : 'text-gray-700 hover:text-purple-600'
                                    }`}
                                >
                                    Donate
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className={`text-lg font-bold mb-4 transition-colors ${
                            theme === 'dark' ? 'text-cyan-300' : 'text-black'
                        }`}>
                            Digital
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <span className={`transition-colors ${
                                    theme === 'dark' ? 'text-blue-300' : 'text-gray-700'
                                }`}>
                                  <Link to="/contact" className="text-blue-700 hover:text-purple-600 transition-colors">
                                    	For Seekers
                                </Link>
                                </span>
                            </li>
                            <li>
                                <span className={`transition-colors ${
                                    theme === 'dark' ? 'text-blue-300' : 'text-gray-700'
                                }`}>
                                <Link to="/digital" className="text-gray-700 hover:text-purple-600 transition-colors">
                                    DigitalProject
                                </Link>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h4 className={`text-lg font-bold mb-4 transition-colors ${
                            theme === 'dark' ? 'text-cyan-300' : 'text-black'
                        }`}>
                            Connect With Us
                        </h4>
                        <p className={`text-sm mb-6 transition-colors ${
                            theme === 'dark' ? 'text-blue-200' : 'text-gray-600'
                        }`}>
                            Join our community of seekers on social media
                        </p>

                        <div className="grid grid-cols-3 gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                                        theme === 'dark'
                                            ? 'bg-blue-900/20 hover:bg-blue-800/30 border border-blue-500/20 text-blue-300'
                                            : 'bg-purple-50 hover:bg-purple-100 text-purple-600'
                                    }`}
                                    aria-label={social.label}
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        className={`text-xl mb-1 transition-colors ${social.color}`}
                                    />
                                    <span className={`text-xs transition-colors ${
                                        theme === 'dark' ? 'text-blue-200' : 'text-gray-700'
                                    }`}>
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={`border-t mt-8 pt-8 transition-colors ${
                    theme === 'dark' ? 'border-blue-500/30' : 'border-purple-200'
                }`}>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className={`text-sm text-center md:text-left transition-colors ${
                            theme === 'dark' ? 'text-blue-200' : 'text-gray-600'
                        }`}>
                            <p>&copy; {currentYear} Invisible Bible. All rights reserved.</p>
                            <p className="mt-1">A journey beyond sight, into truth.</p>
                        </div>

                        {/* Donation Button */}
                        <a
                            href={donationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-6 py-2 font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 flex items-center space-x-2 ${
                                theme === 'dark'
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]'
                                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]'
                            }`}
                        >
                            <span>Support Our Mission</span>
                            <FontAwesomeIcon
                                icon={faExternalLinkAlt}
                                className="text-xs group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                    </div>

                    {/* Additional Info */}
                    <div className={`mt-6 pt-4 border-t text-center text-xs transition-colors ${
                        theme === 'dark' ? 'border-blue-500/20 text-blue-200' : 'border-purple-200 text-gray-500'
                    }`}>
                        <p>Email: info@meccatochrist.org | WhatsApp: +1-747-777-2758</p>
                        <p className="mt-1">Orlando, Florida | Worldwide Ministry</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;