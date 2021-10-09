import React, { useContext, useState, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUsers,
    faPoll,
    faPeopleArrows,
    faDatabase,
    faProjectDiagram,
    faServer,
    faTimes,
    faHotel,
    faWater,
    faDesktop,
    faVideo,
    faCapsules,
    faMicrochip,
    faAtom,
    faCubes,
    faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Hero from './components/Hero';
import { store } from './config/store';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import throttle from 'lodash.throttle';
import Button from './core-components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
    const globalState = useContext(store);
    const { header, hero, skills, experience, projects, footer } = globalState.state;
    library.add(
        faUsers,
        faPoll,
        faPeopleArrows,
        faDatabase,
        faProjectDiagram,
        faServer,
        faTimes,
        faHotel,
        faWater,
        faDesktop,
        faVideo,
        faCapsules,
        faMicrochip,
        faAtom,
        faCubes,
        faChevronUp
    );
    const [toggleBackToTop, setToggleBackToTop] = useState(false);

    const handleScroll = throttle(() => {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
        const scrollTotal = scrollHeight - clientHeight;
        if (scrollTop / scrollTotal > 0.3) {
            setToggleBackToTop(true);
        } else {
            setToggleBackToTop(false);
        }
    }, 300);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, false);

        return () => {
            document.removeEventListener('scroll', handleScroll, false);
        };
    }, []);

    return (
        <>
            <Header {...header} />
            <Hero {...hero} />
            <SkillsSection {...skills} />
            <ExperienceSection {...experience} />
            <ProjectsSection projects={projects} />
            <Footer {...footer} />
            <Button
                className={`scroll-to-top ${toggleBackToTop ? 'scroll-to-top--show' : ''}`}
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                    });
                }}
            >
                <FontAwesomeIcon icon={faChevronUp} size="2x" className="scroll-to-top-icon" />
            </Button>
        </>
    );
};

export default App;
