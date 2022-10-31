import react from 'react';


const Educard = (props) =>{
    return (
        <>
        
            <section>
                    <div className='container-fluid'>
                         <div className='row'>
                                <div className='col'>
                                        <p>{props.imgurl}</p>
                                </div>
                         </div>
                         <div className='row'>
                                <div className='col'>
                                        <h2>{props.title}</h2>
                                </div>
                         </div>
                         <div className='row'>
                                <div className='col'>
                                        <p>{props.text}</p>
                                </div>
                         </div>
                         <div className='row'>
                                <div className='col'>
                                        <p>{props.githuburl}</p>
                                </div>
                         </div>
                    </div>
            </section>

        </>
    );
}


export default Educard;