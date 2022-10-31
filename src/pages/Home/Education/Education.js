import react from "react";
import Educard from "./Educards/Educard";


const Education = () =>{
     return (
        <>

            <section>
                    <div className="container-fluid">
                            <div className="row">
                                        <div className="col">
                                                <h1>My Education</h1>
                                        </div>
                            </div>
                            <div className="row">
                                        <div className="col">
                                                <Educard imgurl="Image is the key to success" title="Education Title" text="lorem ipsum lelo lorum ipsum" githuburl="github.com" />
                                        </div>
                                        <div className="col">
                                                <Educard imgurl="Image is the key to success" title="Education Title" text="lorem ipsum lelo lorum ipsum" githuburl="github.com" />
                                        </div>
                                        <div className="col">
                                                <Educard imgurl="Image is the key to success" title="Education Title" text="lorem ipsum lelo lorum ipsum" githuburl="github.com" />
                                        </div>
                            </div>
                    </div>

            </section>

        </>
     );
}

export default Education;