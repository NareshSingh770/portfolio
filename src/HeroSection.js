import React from "react";

const HeroSection = () =>{
    return(
        <>
            <div className="hero-section">
                <div className="container">
                    <div className="text-heading">
                        <div className="text-1">Hello, My Name is</div>
                        <div className="text-2">Naresh Singh</div>
                        <div className="text-3">And I am a <span>Developer</span><span className="cursor">|</span></div>
                        <button type="button" className="btn btn-danger mt-2">Hire me</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;