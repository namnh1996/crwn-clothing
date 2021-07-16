import React, {Component} from 'react';
import './homepage.styles.scss';

const HomePage = () => {
    return(
        <div className='homepage'>
            <div className='directory-menu'>
                <div className='memu-item'>
                    <div className='content'>
                        <h1 className='title'>HATS</h1>
                        <span className='subtitle'>Show now</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;