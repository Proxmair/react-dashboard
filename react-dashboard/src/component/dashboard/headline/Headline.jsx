import React from 'react'
import Sun from '../../../icons/Sun'
const Headline = () => {
    return (
        <div className='dashboard-headline' >
            <div className='wheather'>
                <Sun/>
                <div>
                    <h2>33</h2>
                    <h4>°C</h4>
                </div>
            </div>
            <div className='statement'>
                <h4>Welcome back!<br/>Hanaa Kurz</h4>
                <h5>Developer, Digital Transformation, 9103221</h5>
            </div>
        </div>
    )
}

export default Headline
