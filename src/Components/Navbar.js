import React,{Fragment} from 'react'

//компоннет не будет иметь никакой функциональности
//и поэтому будет сразу возвращать jsx
export const Navbar = () => (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
        <div className="navbar-brand">
            Note App
        </div>
    </nav>
)