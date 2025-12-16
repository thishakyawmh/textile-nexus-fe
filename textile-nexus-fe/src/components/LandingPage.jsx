import React, { useState } from 'react';
import {
    ArrowRight,
    Layers,
    Scissors,
    Factory,
    ShoppingBag,
    Palette,
    Smartphone,
    Globe,
    ShieldCheck,
    Zap,
    Menu,
    X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-100 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 sm:gap-3">
                    <img src="/images/logo.png" alt="Textile Nexus Logo" className="h-8 sm:h-10 w-auto" />
                    <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight">Textile Nexus</span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        onClick={() => onNavigate('/login')}
                        className="text-sm font-bold text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => onNavigate('/signup')}
                        className="px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all transform active:scale-95"
                    >
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-neutral-900 dark:text-white"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-black border-t border-neutral-100 dark:border-white/10 px-4 py-4 space-y-3 animate-fade-in-up">
                    <button
                        onClick={() => {
                            onNavigate('/login');
                            setMobileMenuOpen(false);
                        }}
                        className="w-full text-left py-3 px-4 text-base font-bold text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => {
                            onNavigate('/signup');
                            setMobileMenuOpen(false);
                        }}
                        className="w-full py-3 px-4 bg-black dark:bg-white text-white dark:text-black rounded-xl text-base font-bold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
                    >
                        Get Started
                    </button>
                </div>
            )}
        </nav>
    );
};

const Hero = ({ onNavigate }) => {
    return (
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-50/50 dark:bg-black transition-colors duration-300">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] sm:left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-200/40 dark:bg-purple-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter opacity-70 animate-blob" />
                <div className="absolute top-[10%] right-[10%] sm:right-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-200/40 dark:bg-neutral-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-[20%] left-[20%] sm:left-[30%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-200/40 dark:bg-pink-900/20 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen filter opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 mb-6 sm:mb-8 animate-fade-in-up">
                    <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] sm:text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wide">Revolutionizing Fashion Tech</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 dark:text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 animate-fade-in-up delay-100">
                    The Future of <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Fashion</span> <span className="block sm:inline">Supply Chain</span>
                </h1>

                <p className="max-w-2xl mx-auto text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 leading-relaxed animate-fade-in-up delay-200 px-2">
                    Connect every stage of production from design to delivery. Textile Nexus unifies Designers, Factories, Tailors, and Suppliers in one seamless AI-powered platform.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-up delay-300 px-2">
                    <button
                        onClick={() => onNavigate('/signup')}
                        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm sm:text-base font-bold hover:bg-neutral-900 dark:hover:bg-neutral-200 transition-all transform hover:-translate-y-1 shadow-xl shadow-black/20 dark:shadow-white/10 flex items-center justify-center gap-2"
                    >
                        Start Your Journey
                        <ArrowRight size={18} />
                    </button>
                    <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white dark:bg-transparent text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full text-sm sm:text-base font-bold hover:bg-neutral-50 dark:hover:bg-white/10 transition-all">
                        Book a Demo
                    </button>
                </div>

                {/* Hero Dashboard Preview */}
                <div className="mt-12 sm:mt-20 relative mx-auto max-w-5xl rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden animate-fade-in-up delay-500 group">
                    <div className="absolute top-0 left-0 w-full h-6 sm:h-8 bg-neutral-50 dark:bg-neutral-800 border-b border-neutral-100 dark:border-neutral-700 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-400"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-400"></div>
                    </div>
                    {/* Placeholder for a dashboard screenshot - using a gradient placeholder for now */}
                    <div className="aspect-[16/9] bg-neutral-50 dark:bg-neutral-950 flex items-center justify-center flex-col gap-4 group-hover:scale-[1.02] transition-transform duration-700 ease-out relative">
                        <img src="/images/landing-hero.png" alt="Platform Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent dark:from-black/90 dark:via-black/20" />
                        <div className="absolute bottom-3 sm:bottom-10 left-3 sm:left-10 right-3 sm:right-10 p-3 sm:p-6 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/50 dark:border-white/10 shadow-lg">
                            <div className="grid grid-cols-3 gap-2 sm:gap-8">
                                <div className="text-center">
                                    <p className="text-[8px] sm:text-xs text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Active Orders</p>
                                    <p className="text-lg sm:text-3xl font-black text-neutral-900 dark:text-white">1,248</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[8px] sm:text-xs text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">On Time</p>
                                    <p className="text-lg sm:text-3xl font-black text-emerald-500">98.5%</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-[8px] sm:text-xs text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Revenue</p>
                                    <p className="text-lg sm:text-3xl font-black text-blue-600 dark:text-blue-400">$4.2M</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureCard = ({ icon: Icon, title, description, color }) => (
    <div className="group p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white dark:bg-white/5 border border-neutral-100 dark:border-white/10 shadow-sm hover:shadow-xl hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 hover:-translate-y-1">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center transition-colors duration-300 ${color}`}>
            <Icon size={24} className="text-white sm:hidden" />
            <Icon size={28} className="text-white hidden sm:block" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-2 sm:mb-3 group-hover:text-black dark:group-hover:text-neutral-200">{title}</h3>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 leading-relaxed">{description}</p>
    </div>
);

const RoleCard = ({ title, role, image, tags }) => (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[4/5] group cursor-pointer">
        <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="inline-block px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] sm:text-xs font-bold mb-2 sm:mb-3 border border-white/10 uppercase tracking-wider">
                {role}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{title}</h3>
            <div className="flex flex-wrap gap-1 sm:gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-0 sm:translate-y-2 sm:group-hover:translate-y-0">
                {tags.map((tag, i) => (
                    <span key={i} className="text-[10px] sm:text-xs bg-black/40 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md backdrop-blur-sm border border-white/10">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

const LandingPage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="min-h-screen bg-neutral-50/50 dark:bg-black font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
            <Navbar onNavigate={handleNavigate} />
            <Hero onNavigate={handleNavigate} />

            {/* Partners/Stats Strip */}
            <div className="py-6 sm:py-10 border-y border-neutral-100 dark:border-white/10 bg-white dark:bg-neutral-950 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:justify-between opacity-50 dark:opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {['VOGUE', 'FORBES', 'WIRED', 'TECHCRUNCH', 'HYPEBEAST'].map((brand) => (
                        <span key={brand} className="text-sm sm:text-xl font-black text-neutral-900 dark:text-white tracking-widest">{brand}</span>
                    ))}
                </div>
            </div>

            {/* Main Value Proposition */}
            <section id="features" className="py-16 sm:py-24 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6">Unified Platform for the <br className="hidden sm:block" /><span className="sm:hidden"> </span>Entire Fashion Industry</h2>
                    <p className="text-sm sm:text-lg text-neutral-500 dark:text-neutral-400 px-2">Break down silos. Textile Nexus creates a digital thread that connects every stakeholder in the garment production lifecycle.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
                    <FeatureCard
                        icon={Layers}
                        color="bg-blue-500"
                        title="End-to-End Visibility"
                        description="Track orders from fabric sourcing to final delivery with real-time updates and complete transparency."
                    />
                    <FeatureCard
                        icon={Smartphone}
                        color="bg-purple-500"
                        title="Digital Measurements"
                        description="AI-powered body scanning technology ensures perfect fits, reducing returns and increasing satisfaction."
                    />
                    <FeatureCard
                        icon={Globe}
                        color="bg-green-500"
                        title="Sustainable Sourcing"
                        description="Connect directly with eco-friendly fabric suppliers and factories to build a greener supply chain."
                    />
                    <FeatureCard
                        icon={Zap}
                        color="bg-yellow-500"
                        title="Smart Manufacturing"
                        description="AI capacity planning helps factories optimize production lines and predict bottlenecks before they happen."
                    />
                    <FeatureCard
                        icon={Palette}
                        color="bg-pink-500"
                        title="Designer Hub"
                        description="A collaborative space for designers to showcase collections, get feedback, and find production partners."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        color="bg-neutral-800 dark:bg-neutral-700"
                        title="Verified Quality"
                        description="Automated quality control checks and verified supplier ratings ensure premium output every time."
                    />
                </div>
            </section>

            {/* Ecosystem Roles Section */}
            <section id="ecosystem" className="py-16 sm:py-24 bg-black text-white relative overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] opacity-20" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
                        <div>
                            <span className="text-purple-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-1 sm:mb-2 block">The Ecosystem</span>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Built for Every Role</h2>
                        </div>
                        <p className="max-w-md text-neutral-400 text-sm sm:text-lg">Customized dashboards and tools tailored to the specific needs of every professional in the chain.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        <RoleCard
                            title="The Creator"
                            role="Designer"
                            image="/images/landing-designer.png"
                            tags={['Sketching', 'Tech Packs', 'Sourcing']}
                        />
                        <RoleCard
                            title="The Maker"
                            role="Tailor"
                            image="/images/landing-tailor.png"
                            tags={['Measurements', 'Pattern Making', 'Sewing']}
                        />
                        <RoleCard
                            title="The Manufacturer"
                            role="Factory"
                            image="/images/landing-factory.png"
                            tags={['Production', 'QC', 'Capacity']}
                        />
                        <RoleCard
                            title="The Source"
                            role="Supplier"
                            image="/images/landing-supplier.png"
                            tags={['Fabrics', 'Trims', 'Logistics']}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 text-center">
                <div className="bg-gradient-to-br from-neutral-900 to-black rounded-2xl sm:rounded-[3rem] p-8 sm:p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-purple-500/30 rounded-full blur-[60px] sm:blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] bg-blue-500/30 rounded-full blur-[60px] sm:blur-[100px] translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10">
                        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8">Ready to transform your production?</h2>
                        <p className="text-sm sm:text-lg text-neutral-300 mb-6 sm:mb-10 max-w-2xl mx-auto">Join thousands of industry professionals who are streamlining their workflow with Textile Nexus today.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                            <button
                                onClick={() => handleNavigate('/signup')}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-full text-base sm:text-lg font-bold hover:bg-neutral-100 transition-all transform hover:-translate-y-1"
                            >
                                Get Started Now
                            </button>
                            <button className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-white/20 text-white rounded-full text-base sm:text-lg font-bold hover:bg-white/10 transition-all">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white dark:bg-black border-t border-neutral-100 dark:border-white/10 pt-12 sm:pt-20 pb-8 sm:pb-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-8 sm:gap-10 mb-12 sm:mb-20">
                        <div className="col-span-2 sm:col-span-2 lg:col-span-2">
                            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                                <img src="/images/logo.png" alt="Textile Nexus Logo" className="h-7 sm:h-8 w-auto" />
                                <span className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white">Textile Nexus</span>
                            </div>
                            <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400 mb-4 sm:mb-6 max-w-xs">Empowering the textile and fashion industry with next-gen technology and connectivity.</p>
                            <div className="flex gap-3 sm:gap-4">
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer text-neutral-600 dark:text-neutral-400">
                                    <Globe size={16} className="sm:hidden" />
                                    <Globe size={18} className="hidden sm:block" />
                                </div>
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-pointer text-neutral-600 dark:text-neutral-400">
                                    <Layers size={16} className="sm:hidden" />
                                    <Layers size={18} className="hidden sm:block" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Platform</h4>
                            <ul className="space-y-2 sm:space-y-4 text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Designers</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Suppliers</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Factories</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Tailors</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Company</h4>
                            <ul className="space-y-2 sm:space-y-4 text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Press</a></li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1">
                            <h4 className="font-bold text-neutral-900 dark:text-white mb-4 sm:mb-6 text-sm sm:text-base">Resources</h4>
                            <ul className="space-y-2 sm:space-y-4 text-neutral-500 dark:text-neutral-400 text-xs sm:text-sm">
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-black dark:hover:text-white transition-colors">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-6 sm:pt-8 border-t border-neutral-100 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
                        <p className="text-neutral-400 text-xs sm:text-sm text-center md:text-left">© 2024 Textile Nexus Inc. All rights reserved.</p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-500 dark:text-neutral-400">
                            <span>Made with</span>
                            <span className="text-red-500">♥</span>
                            <span>for Fashion</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
