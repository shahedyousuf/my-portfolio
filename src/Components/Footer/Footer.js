import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer class="footer footer-center p-4 mt-4 bg-accent text-base-content rounded">
            <div class="grid grid-flow-col gap-4">
                <><HashLink className='text-white text-lg' smooth to='/#aboutMe'>About me</HashLink></>
                <> <HashLink className='text-white text-lg' smooth to='/#projects'>Projects</HashLink></>
                <><HashLink className='text-white text-lg' smooth to='/#contact'>Contact</HashLink></>
            </div>
            <div>
                <div class="grid grid-flow-col gap-4">
                    <a className='text-2xl' href='https://www.linkedin.com/in/shahed-yousuf' target='_blank'><AiFillLinkedin /></a>
                    <a className='text-2xl' href='https://github.com/shahedyousuf' target='_blank'><AiOutlineGithub /></a>
                </div>
            </div>
            <div>
                <p className='text-white'>Copyright © 2022 - All rights reserved by S M Shahed Yousuf</p>
            </div>
        </footer>
    );
};

export default Footer;