'use client';
import React, { useEffect, useState } from 'react';
import Navbar from "../componets/Navbar.jsx";
import Footer from "../componets/Footer.jsx";

const sectionIds = ['about', 'solutions', 'action', 'technology', 'benefits', 'case-use'];

const MainLayout = ({ children }) => {
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            // Top margin = half viewport height => so the section triggers when reaching vertical center
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, observerOptions);

        sectionIds.forEach(id => {
            const element = document.getElementById(id);
            console.log("my active id",element)

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
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
