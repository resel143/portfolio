import react from "react";
import Expcard from "./Expcard/Expcard";


const Expirence = () =>{
     return (
        <>

            <section>
                    <div className="container-fluid">
                            <div className="row">
                                        <div className="col">
                                                <h1>My Expirence</h1>
                                        </div>
                            </div>
                            <div className="row text-center">
                                        <div className="col">
                                                <Expcard imgurl="Image is the key to success" title="Strategy and Direction" />
                                        </div>
                                        <div className="col">
                                                <Expcard imgurl="Image is the key to success" title="Strategy and Direction" />
                                        </div>
                                        <div className="col">
                                                <Expcard imgurl="Image is the key to success" title="Strategy and Direction" />
                                        </div>

                            </div>
                            <div className="row text-center pt-3">
                                <div className="col">
                                        <button className="btn btn-primary">More Work</button>
                                </div>
                            </div>
                    </div>

            </section>

        </>
     );
}

export default Expirence;