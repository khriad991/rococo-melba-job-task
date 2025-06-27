import React, { useState } from 'react';

const Navbar = ({ activeId }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-dark-blue w-full fixed top-0 left-0 right-0 z-50">
            <div className="container">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex gap-x-1 md:justify-between py-2.5">
                        <div className="flex items-center">
                            <a href="/about" className="flex items-center ">
                                <div className="flex items-center">
                                    <div className="w-[34px] h-[34px] relative mr-3">
                                        <svg className="w-full h-full absolute top-0 left-0 drop-shadow-md " viewBox="0 0 100 100">
                                            <path d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40
                                               C80 50, 70 60, 60 65 C70 70, 80 80, 80 90
                                               C80 105, 60 115, 50 115 C40 115, 20 105, 20 90
                                               C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z" fill="none" stroke="#60a5fa" strokeWidth="2"></path>
                                        </svg>
                                        <svg className="circuit-lines" viewBox="0 0 100 100">
                                            <path d="M35 40 H65 M50 40 V80
                                               M35 60 H65 M25 50 H75" stroke="#93c5fd" strokeWidth="1.5" fill="none"></path>
                                            <circle cx="35" cy="80" r="2" fill="#93c5fd"></circle>
                                            <circle cx="65" cy="80" r="2" fill="#93c5fd"></circle>
                                        </svg>
                                    </div>
                                    <span className="text-white font-bold text-[1.44rem] tracking-[0.01em]">Clin</span>
                                </div>
                            </a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <NavItem href="#about" activeId={activeId}>About</NavItem>
                            <NavItem href="#solutions" activeId={activeId}>Our Solutions</NavItem>
                            <NavItem href="#action" activeId={activeId}>In Action</NavItem>
                            <NavItem href="#technology" activeId={activeId}>Technology</NavItem>
                            <NavItem href="#benefits" activeId={activeId}>Benefits</NavItem>
                            <NavItem href="#case-use" activeId={activeId}>Case Use</NavItem>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center ">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
                                onClick={toggleMenu}
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Toggle menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden bg-dark-blue w-full ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className="px-4">
                        <MobileNavItem href="#about" onClick={toggleMenu}>About</MobileNavItem>
                        <MobileNavItem href="#solutions" onClick={toggleMenu}>Our Solutions</MobileNavItem>
                        <MobileNavItem href="#action" onClick={toggleMenu}>In Action</MobileNavItem>
                        <MobileNavItem href="#technology" onClick={toggleMenu}>Technology</MobileNavItem>
                        <MobileNavItem href="#benefits" onClick={toggleMenu}>Benefits</MobileNavItem>
                        <MobileNavItem href="#case-use" onClick={toggleMenu}>Case Use</MobileNavItem>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Desktop NavItem
const NavItem = ({ href, children, activeId }) => {
    const id = href.replace('#', '');
    const isActive = activeId === id;

    return (
        <div className="relative group">
            <a
                href={href}
                className={`nav-link relative inline-block py-2 px-1 text-white hover:text-[#60a5fa] transition-colors duration-300 ${isActive ? 'text-[#60a5fa] font-medium' : ''}`}
                onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                }}
            >
                {children}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#60a5fa] transform origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </a>
        </div>
    );
};

// Mobile NavItem
const MobileNavItem = ({ href, children, onClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        if (onClick) onClick();
    };

    return (
        <a
            href={href}
            className="mobile-nav-link"
            onClick={handleClick}
        >
            {children}
        </a>
    );
};

export default Navbar;
