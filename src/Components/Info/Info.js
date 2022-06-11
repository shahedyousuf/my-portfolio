import React from 'react';
import image from '../../images/image.png';
import resume from '../../files/resume.pdf';

const Info = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img src={image} class="max-w-lg rounded-lg shadow-2xl" />
                <div className='p-4'>
                    <h1 class="text-4xl font-bold mb-2">S M Shahed Yousuf</h1>
                    <p class="text-4xl font-semibold mb-2">Full Stack Developer</p>
                    <a href={resume} download target='_blank'>
                        <button className='btn btn-accent text-white m-2'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Info;