import react from 'react';
import './hero.css'


const Hero = () => {
    return (
        <>
                <div className='container-fluid' id='outer-container'>
                        <div className='row'>
                                <div className='col'>
                                        <h2>Image is the key to success</h2>
                                </div>
                                <div className='col'>
                                        <h2>Hi! I am Reshul</h2>
                                        <h4>Software Developer</h4>
                                        <p>Software Debugger</p>
                                </div>
                        </div>
                        <div className='row'>
                                <div className='col'>
                                        <p>Email: reshulwate@gmail.com</p>
                                </div>
                                <div className='col'>
                                        <p>Phone: +91-6266975418</p>
                                </div>
                                <div className='col'>
                                        <button className='btn btn-primary'>Resume</button>
                                </div>
                        </div>
                </div>
        </>

    )
}

export default Hero;