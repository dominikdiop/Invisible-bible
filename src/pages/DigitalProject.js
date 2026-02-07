import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faShieldAlt,
    faCrown,
    faLock,
    faUsers,
    faRocket,
    faQrcode,
    faDatabase,
    faBell,
    faUserShield,
    faNetworkWired,
    faEyeSlash
} from '@fortawesome/free-solid-svg-icons';

function DigitalProject() {
    const backgroundVideoConfig = {
        id: "rE1136gXUKw",
        startTime: 39,
        endTime: 72,
        get embedUrl() {
            return `https://www.youtube.com/embed/${this.id}?autoplay=1&mute=1&start=${this.startTime}&end=${this.endTime}&loop=1&playlist=${this.id}&controls=0&modestbranding=1&rel=0&playsinline=1`;
        }
    };

    // Team members
    const teamMembers = [
        {
            id: 1,
            name: "Dr. Ahmed",
            role: "Founder",
            expertise: "Ministry Strategy",
            image: "/images/about/joktan.jpg",
            icon: faCrown
        },
        {
            id: 2,
            name: "Raha M",
            role: "Manager of Invisible Bible",
            expertise: "Operations & Community Support",
            image: "/images/about/blur.png",
            icon: faUsers
        },
        {
            id: 3,
            name: "Tarek",
            role: "Lead Developer",
            expertise: "Encryption & Security",
            image: "/images/about/mine.png",
            icon: faCode
        }
    ];

    // Project features 
    const features = [
        {
            icon: faEyeSlash,
            title: "Complete Invisibility",
            description: "Digital scriptures hidden in plain sight using advanced encryption and hidden from the detection of the Artificial intelligence (AI)",
            color: "from-purple-600 to-pink-600"
        },
        {
            icon: faLock,
            title: "Multi-layer Security",
            description: "Military-grade encryption with biometric authentication options",
            color: "from-green-600 to-emerald-600"
        },
        {
            icon: faBell,
            title: "Alert System",
            description: "Instant notifications for high-risk situations and emergency protocols",
            color: "from-orange-600 to-red-600"
        },
        {
            icon: faDatabase,
            title: "Offline Database",
            description: "Complete functionality without internet connection for maximum safety",
            color: "from-indigo-600 to-purple-600"
        },
        {
            icon: faUserShield,
            title: "Anonymous Access",
            description: "Zero personal data collection and complete user anonymity",
            color: "from-pink-600 to-rose-600"
        }
    ];

    // Development timeline
    const timeline = [
        {
            phase: "Phase 1",
            title: "Research & Planning",
            status: "Completed",
            description: "Need analysis and security requirements gathering",
        },
        {
            phase: "Phase 2",
            title: "Fundraising",
            status: "In Progress",
            description: "Focusing on mobilizing resources to transform the plan into concrete action and measurable impact.",
        },
        {
            phase: "Phase 3",
            title: "Core Development",
            status: "Upcoming",
            description: "Closed testing with trusted underground church networks",
        },
        {
            phase: "Phase 4",
            title: "Global Launch",
            status: "Planned",
            description: "Public release with multi-language support",
        }
    ];

    return (
        <div className="pt-16">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center px-4 relative overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60"></div>
                    <iframe
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[200%] min-h-[200%] scale-150 blur-lg opacity-40"
                        src={backgroundVideoConfig.embedUrl}
                        title="Digital Project Background"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="eager"
                    ></iframe>
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={faCode} className="text-white text-lg" />
                                </div>
                                <span className="text-white font-semibold">Digital Innovation</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                                <span className="block text-white">Invisible Bible</span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 mt-2">
                                    Digital Initiative
                                </span>
                            </h1>

                            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
                                Bringing spiritual protection to the digital realm.
                                A secure, encrypted platform for believers in restricted nations and undetectable via AI (Artificial Intelligence).
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                <a
                                    href="#features"
                                    className="btn-neon px-8 py-4 text-lg flex items-center justify-center gap-3"
                                >
                                    <FontAwesomeIcon icon={faRocket} />
                                    <span>Explore Features</span>
                                </a>
                                <button className="btn-outline-neon px-8 py-4 text-lg opacity-70 cursor-not-allowed">
                                    Join Beta Waitlist (Coming Soon)
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                                {[
                                    { label: "Encryption Layers", value: "256-bit" },
                                    { label: "Team Members", value: "3+" },
                                    { label: "Languages", value: "5+" },
                                    { label: "Security Level", value: "Military" }
                                ].map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                        <div className="text-sm text-white/70">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - Digital Mockup */}
                        <div className="relative">
                            <div className="neon-card p-2 backdrop-blur-sm bg-white/5 border-white/20">
                                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-8">
                                    {/* Mockup Phone */}
                                    <div className="relative w-64 h-[500px] mx-auto bg-gray-800 rounded-[2rem] border-8 border-gray-900">
                                        {/* Screen Content */}
                                        <div className="absolute inset-4 bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-2xl p-4">
                                            <div className="flex items-center justify-between mb-6">
                                                <div className="text-white font-bold">Invisible Bible</div>
                                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                            </div>

                                            {/* App Content */}
                                            <div className="space-y-4">
                                                <div className="bg-white/10 rounded-lg p-3">
                                                    <div className="flex items-center gap-3">
                                                        <FontAwesomeIcon icon={faLock} className="text-green-400" />
                                                        <div>
                                                            <div className="text-white text-sm">Secure Session</div>
                                                            <div className="text-white/60 text-xs">256-bit Encrypted</div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="bg-white/10 rounded-lg p-3">
                                                    <div className="text-white text-sm mb-2">John 3:16</div>
                                                    <div className="text-white/80 text-xs leading-relaxed">
                                                        For God so loved the world that he gave his one and only Son...
                                                    </div>
                                                </div>

                                                <div className="flex justify-center my-8">
                                                    <div className="w-32 h-32 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faQrcode} className="text-white text-4xl" />
                                                    </div>
                                                </div>

                                                <div className="text-center text-white/60 text-xs">
                                                    Enter your personal encryption key
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-xl opacity-30"></div>
                            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Revolutionary <span className="neon-cyan">Features</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Designed specifically for the unique challenges faced by believers in restricted regions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {features.map((feature, index) => (
                            <div key={index} className="group">
                                <div className="neon-card p-8 h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform`}>
                                        <FontAwesomeIcon icon={feature.icon} className="text-white text-2xl" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-600 transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-700">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            {/* Team Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Meet Our <span className="neon-purple">Digital Team</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Experts in security, encryption, and digital ministry working together
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto">
                        {teamMembers.map((member) => (
                            <div key={member.id} className="group">
                                <div className="neon-card p-6 text-center transform transition-all duration-300 hover:scale-[1.03] h-full">
                                    <div className="relative mb-6">
                                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className={`absolute bottom-2 right-1/4 w-12 h-12 ${member.role.includes('Founder')
                                            ? 'bg-gradient-to-r from-yellow-600 to-orange-600'
                                            : member.role.includes('Manager')
                                                ? 'bg-gradient-to-r from-blue-600 to-purple-600'
                                                : 'bg-gradient-to-r from-purple-600 to-pink-600'
                                            } rounded-full flex items-center justify-center border-4 border-white`}>
                                            <FontAwesomeIcon icon={member.icon} className="text-white" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                    <p className={`font-semibold mb-2 ${member.role.includes('Founder')
                                        ? 'text-yellow-600'
                                        : member.role.includes('Manager')
                                            ? 'text-blue-600'
                                            : 'text-purple-600'
                                        }`}>
                                        {member.role}
                                    </p>
                                    <p className="text-gray-600 text-sm">{member.expertise}</p>

                                    {/* Special badge for Founder */}
                                    {member.role.includes('Founder') && (
                                        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full border border-yellow-300">
                                            <FontAwesomeIcon icon={faCrown} className="text-yellow-600 text-sm" />
                                            <span className="text-sm text-yellow-800 font-medium">Founding Member</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="neon-card p-10 text-center max-w-4xl mx-auto">
                        <div className="w-24 h-24 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <FontAwesomeIcon icon={faUsers} className="text-white text-3xl" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
                        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                            We're looking for more talented individuals passionate about digital ministry and security
                        </p>
                        <a
                            href="mailto:info@invisible.bible"
                            value="_blank"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300"
                        >
                            <FontAwesomeIcon icon={faNetworkWired} />
                            <span>Contact Digital Team</span>
                        </a>
                    </div>
                </div>
            </section>
            {/* Timeline Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Development <span className="neon-blue">Timeline</span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                            Our journey to create the most secure digital Bible Medium
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                    {/* Content */}
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                                        <div className="neon-card p-6 transform hover:scale-[1.02] transition-transform">
                                            <div className="flex items-center gap-3 mb-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                                    item.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                        'bg-purple-100 text-purple-800'
                                                    }`}>
                                                    {item.status}
                                                </span>
                                                <span className="text-gray-500">{item.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-2">{item.phase}: {item.title}</h3>
                                            <p className="text-gray-700">{item.description}</p>
                                        </div>
                                    </div>

                                    {/* Circle */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8">
                                        <div className={`w-full h-full rounded-full border-4 border-white ${item.status === 'Completed' ? 'bg-green-500' :
                                            item.status === 'In Progress' ? 'bg-blue-500' :
                                                'bg-purple-500'
                                            }`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-white text-3xl" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Military-Grade <span className="text-cyan-300">Security</span>
                            </h2>
                            <div className="prose prose-lg text-gray-300">
                                <p className="mb-4">
                                    We employ the same encryption standards used by governments and financial institutions.
                                    Your spiritual journey remains completely private and secure.
                                </p>
                                <p className="mb-4">
                                    Every interaction is encrypted end-to-end, with no logs kept and no personal data stored.
                                </p>
                                <p>
                                    Our technology ensures that even if a device is confiscated, the sacred texts remain invisible
                                    and inaccessible to unauthorized eyes.
                                </p>
                            </div>
                        </div>

                        <div className="neon-card p-8 bg-gray-800/50">
                            <h3 className="text-2xl font-bold mb-6">Security Features</h3>
                            <div className="space-y-4">
                                {[
                                    "256-bit AES Encryption",
                                    "End-to-End Secure Channels",
                                    "Zero-Knowledge Architecture",
                                    "VPN Integration Ready",
                                    "Offline Mode Support"
                                ].map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
                                        <div className="w-6 h-6 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center">
                                            <FontAwesomeIcon icon={faLock} className="text-white text-xs" />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-5xl text-center">
                    <div className="neon-card p-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Ready for the <span className="neon-cyan">Digital Revelation?</span>
                        </h2>
                        <p className="text-xl lg:text-2xl mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                            Be among the first to support the future of secure digital scripture.
                            Join our news letter to get updates on our progress Now.
                        </p>
                        <div className="space-y-6">
                            <div className="max-w-md mx-auto">
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Enter your email for updates"
                                        className="w-full px-6 py-4 rounded-full bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    />
                                    <button className="absolute right-2 top-2 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-shadow">
                                        Join Waitlist
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Link
                                    to="/"
                                    className="btn-outline-neon px-10 py-4 text-lg"
                                >
                                    Back to Home
                                </Link>
                                <Link
                                    to="/books"
                                    className="btn-neon px-10 py-4 text-lg"
                                >
                                    Explore Physical Books
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DigitalProject;