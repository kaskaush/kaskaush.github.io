import React, { useContext } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUsers,
    faPoll,
    faPeopleArrows,
    faDatabase,
    faProjectDiagram,
    faServer,
    faChevronCircleLeft,
    faChevronCircleRight,
    faTimes,
    faHotel,
    faWater,
    faDesktop,
    faVideo,
    faCapsules,
    faMicrochip,
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Hero from './components/Hero';
import { store } from './config/store';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

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
        faChevronCircleLeft,
        faChevronCircleRight,
        faTimes,
        faHotel,
        faWater,
        faDesktop,
        faVideo,
        faCapsules,
        faMicrochip
    );
    return (
        <>
            <Header {...header} />
            <Hero {...hero} />
            <SkillsSection {...skills} />
            <ExperienceSection {...experience} />
            <ProjectsSection projects={projects} />
            <Footer {...footer} />
        </>
    );
};

export default App;
