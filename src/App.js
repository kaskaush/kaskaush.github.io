import React, { useContext } from 'react';
import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import { store } from './config/store';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ExperienceSection from './components/ExperienceSection';

const App = () => {
    const globalState = useContext(store);
    const { header, hero, about, experience, footer } = globalState.state;

    return (
        <>
            <Header {...header} />
            <Hero {...hero} />
            <AboutSection {...about} />
            <ExperienceSection {...experience} />
            <AboutSection {...about} />
            <Footer {...footer} />
        </>
    );
};

export default App;
