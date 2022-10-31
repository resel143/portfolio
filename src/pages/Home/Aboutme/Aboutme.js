import react from 'react';
import Aboutcard from './Aboutcard/Aboutcard';


const Aboutme = () =>{
     return (
        <>
        
            <section>

                    <div className='container-fluid'>
                                <div className='row'>
                                        <div className='col'>
                                                <div className='container-fluid'>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <h1>About me</h1>
                                                                </div>
                                                        </div>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <p>In the mean time shall soon find out the cause of this: What was the epicurus towards their children; each of these can have a chain of not to have been taken in the broad plain in what is the reason why</p>
                                                                </div>
                                                        </div>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <h3>"What was the epicurus towards their children; each of these can have a chain.</h3>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className='col'>
                                                <div className='container-fluid'>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <Aboutcard per="60%" title="Titili" />
                                                                </div>
                                                                
                                                        </div>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <Aboutcard per="70%" title="Titili" />
                                                                </div>
                                                                
                                                        </div>
                                                        <div className='row'>
                                                                <div className='col'>
                                                                        <Aboutcard per="50%" title="Titili" />
                                                                </div>
                                                                
                                                        </div>
                                                </div>

                                        </div>
                                </div>
                    </div>

            </section>

        </>
     );
}

export default Aboutme;