
import { NavLink } from 'react-router-dom'


import React from 'react'

const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to={'/reactr/products'}>Products</NavLink>
                </li>
            </ul>
            <h1>Home</h1>

        </div>
    )
}

export default Home
