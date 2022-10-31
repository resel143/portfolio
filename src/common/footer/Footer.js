import react from 'react';


const Footer = () =>{
     return (
        <>

            <section>
                    <div className='container-fluid bg-dark text-light'>
                            <div className='row'>
                                    <div className='col'>  
                                            <div className='container-fluid'>
                                                    <div className='row'>
                                                            <div className='col'>
                                                                <h1>Reshul Wate</h1>
                                                            </div>
                                                    </div>
                                                    <div className='row'>
                                                            <div className='col'>
                                                                <p>I am Reshul</p>
                                                            </div>
                                                    </div>
                                                    <div className='row'>
                                                            <div className='col'>
                                                                 <button className='btn btn-primary'>Facebook</button>
                                                            </div>
                                                    </div>
                                            </div>
                                    </div>
                                    <div className='col'>
                                            <button className='btn btn-primary'>Download CV</button>
                                    </div>
                                    <div className='col'>
                                            <button className='btn btn-primary'>Let's Talk</button>
                                    </div>
                            </div>
                            <div className='row'>
                                    <div className='col'>
                                            <p>Made by Reshul</p>
                                    </div>
                                    <div className='col'>
                                            <p>Home</p>
                                    </div>
                                    <div className='col'>
                                            <p>Work</p>
                                    </div>
                                    <div className='col'>
                                            <p>Service</p>
                                    </div>
                                    <div className='col'>
                                            <p>Blog</p>
                                    </div>
                                    <div className='col'>
                                            <p>Contact</p>
                                    </div>
                            </div>
                    </div>
            </section>
            
        </>
     );
}

export default Footer;