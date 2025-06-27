'use client';
import React, { useEffect, useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const sectionIds = ['about', 'solutions', 'action', 'technology', 'benefits', 'case-use'];

const MainLayout = ({ children }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + (window.innerHeight * 2/3);
            
            for (let i = 0; i < sectionIds.length; i++) {
                const section = document.getElementById(sectionIds[i]);
                if (!section) continue;
                
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionBottom = sectionTop + sectionHeight;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveId(section.id);
                    break;
                }
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        // Initial check in case the page loads with a section already in view
        handleScroll();

        // Clean up
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Add smooth scrolling behavior
    useEffect(() => {
        const handleSmoothScroll = (e) => {
            const targetId = e.target.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Adjust for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        };

        // Add click event listeners to all nav links
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <section className="flex flex-col">
            <Navbar activeId={activeId} />
            <section>{children}</section>
            <Footer />
        </section>
    );
};

export default MainLayout;
