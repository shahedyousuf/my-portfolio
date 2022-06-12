import React from 'react';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Info from '../Info/Info';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Info></Info>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;