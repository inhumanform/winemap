import './home.css';
import React, { useState, useEffect } from 'react';
import vineyardhero from '../../../public/aboutimages/aerial-vineyard.jpg';


function Home() {
    return (
        <div className="hero-main">
            <div className="hero-video relative w-full h-screen">
                <video src={vineyardhero} autoPlay loop muted className="w-full h-full object-cover" />
                <div className="content absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white"
                    style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}>
                    <h1 className="text-4xl font-bold">WineProject</h1>
                    <p className="text-lg">All the world's wine regions at your fingertips</p>
                </div>
            </div>
        </div>
    );
}

export default Home;