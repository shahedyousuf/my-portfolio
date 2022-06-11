import React from 'react';

const Header = () => {
    return (
        <div class="navbar bg-accent p-4">
            <div class="flex-1">
                <a class="btn btn-ghost normal-case text-xl text-white">My portfolio</a>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal p-2">
                    <li><a className='text-white text-lg'>Home</a></li>
                    <li><a className='text-white text-lg'>Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;