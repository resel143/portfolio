import react from 'react';


const Addresscard = (props) =>{
    return (
        <>
        
            <section>
                    <div className='container-fluid'>
                            <div className='row'>
                                    <div className='col'>
                                            {props.imgurl}
                                    </div>
                                    <div className='col'>
                                            {props.title}
                                    </div>
                            </div>
                    </div>
            </section>

        </>
    );
}


export default Addresscard;