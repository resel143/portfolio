import react from "react";

const Aboutcard = (props) =>{
     return (
        <>
            <section>
                    <div className="container-fluid">
                            <div className="row">
                                    <div className="col">
                                            {props.title}
                                    </div>
                                    <div className="col">
                                            {props.per}
                                    </div>
                            </div>
                    </div>
            </section>
        </>
     );
}


export default Aboutcard;