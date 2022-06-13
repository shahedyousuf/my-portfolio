import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div class="navbar bg-accent p-4 min-w-full">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl text-white">My portfolio</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-2">
                    <li><HashLink className='text-white text-xl' smooth to='/#aboutMe'>About me</HashLink></li>
                    <li> <HashLink className='text-white text-xl' smooth to='/#projects'>Projects</HashLink></li>
                    <li><HashLink className='text-white text-xl' smooth to='/#contact'>Contact</HashLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;