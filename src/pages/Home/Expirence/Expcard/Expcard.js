import react from 'react';


const Expcard = (props) =>{
     return (
        <>
                <section>

                        <div className='container-fluid'>
                                <div className='row'>
                                        <div className='col'>
                                                {props.imgurl}
                                        </div>
                                </div>
                                <div className='row'>
                                        <div className='col'>
                                                {props.title}
                                        </div>
                                </div>
                        </div>

                </section>
        </>
     );
}


export default Expcard;