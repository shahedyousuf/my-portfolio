import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProjects from '../../hooks/useProjects';
import './Details.css';

const Details = () => {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(`/projects.json`)
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const details = projects.find(project => project?.id === parseInt(id));



    return (
        <div>
            <h2 className='text-accent font-bold p-2 text-2xl m-4'>Details for project: {details?.name}</h2>
            <div className='flex justify-center items-center container'>
                <div className='image w-50'>
                    <img className='border rounded p-2 m-2' src={details?.image1} alt="" />
                    <img className='border rounded p-2 m-2' src={details?.image2} alt="" />
                    <img className='border rounded p-2 m-2' src={details?.image3} alt="" />
                </div>
                <div className='info card-body w-50'>
                    <p className='text-lg'>{details?.Description}</p>
                    <a className='font-semibold text-accent' href={details?.clientLink}>Client-code</a>
                    <a className='font-semibold text-accent' href={details?.serverLink}>Client-code</a>
                    <a className='font-semibold text-accent' href={details?.websiteLink}>Website</a>
                </div>
            </div>
        </div>
    );
};

export default Details;