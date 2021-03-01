import React from 'react'
import {NavLink} from 'react-router-dom'

//компоннет не будет иметь никакой функциональности
//и поэтому будет сразу возвращать jsx
export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary' style={ { marginBottom: 20 } }>
        <div className="navbar-brand">
            Note App
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink
                    className="nav-link"
                    to='/'
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="nav-link"
                    to='/about'
                >
                    Информация
                </NavLink>
            </li>
        </ul>
    </nav>
)