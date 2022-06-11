import React from 'react';
import AllProjects from '../AllProjects/AllProjects';

const Projects = () => {
    return (
        <div>
            <h2 className='text-accent font-bold p-2 text-2xl mb-2'>My recent projects</h2>
            <div className='mt-4'>
                <AllProjects></AllProjects>
            </div>
        </div>
    );
};

export default Projects;