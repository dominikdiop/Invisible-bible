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

function Footer() {
    const currentYear = new Date().getFullYear();
    const donationUrl = "https://meccatochrist.churchcenter.com/giving/to/invisible-bible";

    const socialLinks = [
        {
            icon: faFacebookF,
            url: 'https://www.facebook.com/search/top?q=mecca%20to%20christ%20international',
            label: 'Facebook',
            color: 'hover:text-blue-600'
        },
        {
            icon: faTwitter,
            url: 'https://x.com/mecca2christ',
            label: 'X',
            color: 'hover:text-blue-400'
        },
        {
            icon: faInstagram,
            url: 'https://www.instagram.com/mecca_to_christ/',
            label: 'Instagram',
            color: 'hover:text-pink-600'
        },
        {
            icon: faYoutube,
            url: 'https://www.youtube.com/@MBBs.Academy777',
            label: 'YouTube',
            color: 'hover:text-red-600'
        },
        {
            icon: faWhatsapp,
            url: 'https://wa.link/dqcnj9',
            label: 'WhatsApp',
            color: 'hover:text-green-600'
        },
        {
            icon: faEnvelope,
            url: 'mailto:info@invisible.bible',
            label: 'Email',
            color: 'hover:text-purple-600'
        }
    ];

    return (
        <footer className="bg-white/80 border-t border-purple-200 mt-20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="/images/about/neonn.png" alt='Invisible Bible Logo' width={100} height={100} />
                        </div>
                        <p className="text-sm text-gray-700 font-medium">The Book No One Can See</p>
                        <p className="text-sm text-gray-600 italic">
                            "In the unseen lies the true."
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <a
                                    href={donationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 hover:text-purple-600 transition-colors flex items-center space-x-1"
                                >
                                    <span>Donate</span>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black">Digital Invisible Bible</h4>
                        <ul className="space-y-2">
                             <li>
                                <Link to="/contact" className="text-blue-700 hover:text-purple-600 transition-colors">
                                    Seekers
                                </Link>
                            </li>
                             <li>
                                <Link to="/digital" className="text-gray-700 hover:text-purple-600 transition-colors">
                                    Digital
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-4 text-black">Connect With Us</h4>
                        <p className="text-gray-600 text-sm mb-6">
                            Join our community of seekers on social media
                        </p>

                        <div className="grid grid-cols-3 gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors"
                                    aria-label={social.label}
                                >
                                    <FontAwesomeIcon
                                        icon={social.icon}
                                        className="text-xl text-purple-600 mb-1"
                                    />
                                    <span className="text-xs text-gray-700">
                                        {social.label}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-purple-200 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-600 text-sm text-center md:text-left">
                            <p>&copy; {currentYear} Invisible Bible. All rights reserved.</p>
                            <p className="mt-1">A journey beyond sight, into truth.</p>
                        </div>

                        <a
                            href={donationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all flex items-center space-x-2"
                        >
                            <span>Support Our Mission</span>
                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;