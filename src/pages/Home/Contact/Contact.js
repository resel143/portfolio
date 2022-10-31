import react from "react";
import Addresscard from "./Addcard/Addcard";

const Contact = () =>{
     return (
        <>

            <section>
                    <div className="container-fluid">
                            <div className="row">
                                        <div className="col">
                                                <h1>Contact us</h1>
                                        </div>
                            </div>
                            <div className="row">
                                        <div className="col">
                                                <p>I am on every social media and bla bla</p>
                                        </div>
                            </div>
                            <div className="row">
                                        <div className="col">
                                                <div className="container-fluid"> 
                                                                <div className="row">
                                                                        <div className="col">
                                                                                <Addresscard imgurl='imageurl' title="Butterworth, CA" />
                                                                        </div>
                                                                </div>
                                                                <div className="row">
                                                                        <div className="col">
                                                                                <Addresscard imgurl='imageurl' title="Butterworth, CA" />
                                                                        </div>
                                                                </div>
                                                                <div className="row">
                                                                        <div className="col">
                                                                                <Addresscard imgurl='imageurl' title="Butterworth, CA" />
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

export default Contact;