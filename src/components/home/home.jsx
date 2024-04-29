import './home.css';
import React, { useState, useEffect } from 'react';
import vineyardhero from '/home/drewnix/Development/code/phase-5/phase5project/winemap/src/components/home/homeimages/vineyard.mp4';


function Home() {
    return (
        <div className="hero-main">
            <div classname="hero-video">
                <video src={vineyardhero} autoPlay loop muted />
                <div className="content">
                    <h1>World.Wine.Web.</h1>
                    <p>All the world's wine regions at your fingertips</p>
                </div>
            </div>
        </div>
    )

}

export default Home;