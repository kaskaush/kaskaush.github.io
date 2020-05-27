import React, { useContext } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faUsers,
    faPoll,
    faPeopleArrows,
    faDatabase,
    faProjectDiagram,
    faServer,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Hero from './components/Hero';
import { store } from './config/store';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';

const App = () => {
    const globalState = useContext(store);
    const { header, hero, about, experience, projects, footer } = globalState.state;
    library.add(faUsers, faPoll, faPeopleArrows, faDatabase, faProjectDiagram, faServer, faChevronLeft, faChevronRight);
    return (
        <>
            <Header {...header} />
            <Hero {...hero} />
            <AboutSection {...about} />
            <ExperienceSection {...experience} />
            <ProjectsSection projects={projects} />
            <Footer {...footer} />
        </>
    );
};

export default App;
