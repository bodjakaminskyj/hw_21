import  React from 'react';
import { Link } from "react-router-dom"

const links = [
    {
        to: '/hw_21',
        label: 'Home'
    },
    {
        to: '/photos',
        label: 'Photo'
    },
    {
        to: '/publication',
        label: 'Publication'
    },
    {
        to: '/contacts',
        label: 'Contact'
    }
]

export const Navigation = () => {
    return(
        <nav className="navigation">
            <ul>
                {links.map(link =>(
                    <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>
                ))}

            </ul>
        </nav>
    )

}