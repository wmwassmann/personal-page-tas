import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <IoIcons.IoMdPerson />,
        className: 'nav-text'
    },
    {
        title: 'Portfolio',
        path: '/portfolio',
        icon: <IoIcons.IoIosPaper />,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <FaIcons.FaPhone />,
        className: 'nav-text'
    },

]


