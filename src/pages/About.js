import React from 'react'

//компоннет не будет иметь никакой функциональности
//и поэтому будет сразу возвращать jsx
export const About = () => (
    <div className='jumbotron'>
        <div className="container">
            <h1 className="display-4">Лучшее React приложение</h1>
            <p className="lead">
                Версия прилодения <strong>1.0.42</strong>
            </p>
        </div>
    </div>
)