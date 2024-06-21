import React, { useState, useEffect } from 'react';
import { FaLevelUpAlt } from "react-icons/fa";
const Scroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-warm-orange text-white py-2 px-4 rounded"
                >
                    <FaLevelUpAlt />

                </button>
            )}
        </>
    );
};

export default Scroll;
