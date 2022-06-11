import React, { useEffect, useState } from 'react';
import useProjects from '../../hooks/useProjects';
import Project from '../Project/Project';

const AllProjects = () => {
    const [projects] = useProjects();

    return (
        <div className='grid md:grid-cols-2 md:gap-8 lg:grid-cols-3 sm:grid-cols-1 container'>
            {
                projects.map(project => <Project
                    key={project.id}
                    project={project}
                ></Project>)
            }
        </div>
    );
};

export default AllProjects;