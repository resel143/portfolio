import react from 'react';
import Navbar from '../../common/navbar/Navbar';
import Footer from '../../common/footer/Footer';
import Hero from './Hero/Hero';
import Wdid from './Carousel/Carousel';
import Education from './Education/Education';
import Expirence from './Expirence/Expirence';
import Contact from './Contact/Contact';
import Aboutme from "./Aboutme/Aboutme";
import Carousel from './Carousel/Carousel';

const Home  = () =>{
    return (
        <>
            <section>
                    <div className='container-fluid'>
                            <div className='row pb-3'>
                                    <div className='col'>
                                            <Hero />
                                    </div>
                            </div>
                            <div className='row pt-3 pb-3'>
                                    <div className='col'>
                                            <Education  />
                                    </div>
                            </div>
                            <div className='row  pb-3 pt-3'>
                                    <div className='col'>
                                            <Expirence  />
                                    </div>
                            </div>
                            <div className='row pb-3 pt-3'>
                                    <div className='col'>
                                            <Aboutme  />
                                    </div>
                            </div>
                            <div className='row  pb-3 pt-3'>
                                    <div className='col'>
                                            <Contact  />
                                    </div>
                            </div>
                    </div>
            </section>
        </>
    );
}


export default Home;