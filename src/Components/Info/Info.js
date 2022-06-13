import React from 'react';
import image from '../../images/image.png';
import resume from '../../files/resume.pdf';

const Info = () => {
    return (
        <div id='aboutMe' class="hero min-h-screen">
            <div class="hero-content flex-col  lg:flex-row-reverse">
                <img src={image} class="rounded-lg shadow-2xl" />
                <div className='p-4'>
                    <h1 class="text-4xl font-bold mb-2">S M Shahed Yousuf</h1>
                    <p class="text-3xl font-semibold mb-2 text-accent">Full Stack Developer</p>
                    <p className='text-lg mt-4 font-semibold'>I am highly motivated in the field of Web development and always look to expand my knowledge and skills. My main goal is to keep growing as a specialist while having a good career path.</p>
                    <a href={resume} download target='_blank'>
                        <button className='btn btn-accent text-white mt-4'>Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Info;