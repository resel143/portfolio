import react from 'react';


const Navbar = () =>{
    return (
        <>
            <section>
                    <div className='container-fluid'>
                            <div className='row'>
                                    <div className='col-md-3'>
                                            <h1>Reshul Wate</h1>
                                    </div>
                                    <div className='col'>
                                            <p>Home</p>
                                    </div>
                                    <div className='col'>
                                            <p>Expirence</p>
                                    </div>
                                    <div className='col'>
                                            <p>Education</p>
                                    </div>
                                    <div className='col'>
                                            <p>Projects</p>
                                    </div>
                                    <div className='col'>
                                            <p>Contact Me</p>
                                    </div>
                                    <div className='col-md-3'>
                                            <button className='btn btn-primary'>Resume</button>
                                    </div>
                            </div>
                    </div>
            </section>
        </>
    );
}


export default Navbar;