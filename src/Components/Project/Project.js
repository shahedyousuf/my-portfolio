import React from 'react';
import { useNavigate } from 'react-router-dom'

const Project = ({ project }) => {
    const { id, name, Description, image1, image2, image3, clientLink, serverLink, websiteLink } = project;

    const navigate = useNavigate();
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image1} alt="project" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div class="card-actions justify-end">
                    <button onClick={() => handleDetails(id)} class="btn btn-accent">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;