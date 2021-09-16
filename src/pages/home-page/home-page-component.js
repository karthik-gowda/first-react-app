import React from 'react';
import './home-page-component.css';
import Directory from '../../components/directory/directory-component.jsx';
import Button from '../../components/buttons/button-components';

const HomePage = () =>{
    return (
        <div className="home-page">
            <Directory/>
            <Button/>
        </div>
    )
}

export default HomePage;