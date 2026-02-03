import { MdHomeFilled } from 'react-icons/md'
import { FaTv } from "react-icons/fa6";
import { MdMovieCreation } from "react-icons/md";
import { href } from 'react-router-dom';
import { IoSearchOutline } from 'react-icons/io5';

export const navigation = [
        { 
            label: 'TV shows', 
            href: 'tv',
            icon: <FaTv />
        },
        { 
            label: 'Movies', 
            href: 'movie',
            icon: <MdMovieCreation />
        }
    ]

export const mobileNavigation = [ 
    {
        label: "Home",
        href: "/",
        icon: <MdHomeFilled />
    },
    ...navigation,
    {
        label: "search",
        href: "/search",
        icon: <IoSearchOutline />
    }
]
