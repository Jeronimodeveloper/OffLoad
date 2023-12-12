import React from 'react'
import banner from '../assets/banner.jpg';

const Banner = () => {
return (
    <>
        <div className="d-flex flex-column align-items-center p-2">
            <img src={banner} alt="banner" className="img-fluid"/>
        </div>
    </>
)
}

export default Banner
