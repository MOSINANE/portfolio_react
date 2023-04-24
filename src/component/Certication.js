import React from 'react';
import img1 from '../component/images/IntroductionToDevOps.jpg'
import img2 from '../component/images/IntroductionToAgileDevelopmentAndScrum.jpg'
import img3 from '../component/images/Server-side Development with NodeJS, Express and MongoDB.jpg';
import img4 from '../component/images/Front-End Web UI Frameworks and Tools Bootstrap 4.jpg';
import img5 from '../component/images/Data Collection and Processing with Python.jpg';
import img6 from '../component/images/Introduction to Cloud Computing.jpg';
import img7 from '../component/images/Front-End Web Development with React.jpg';
import img8 from '../component/images/Python Functions, Files, and Dictionaries.jpg';
import img9 from '../component/images/Full-Stack Web Development with React.jpg';
import img10 from '../component/images/DevOps, Cloud, and Agile Foundations.jpg';

const Certificates = () => {
    return (
        <>
            <br/>
            <div className="container">
                <div className="row my-3">
                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img1} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Introduction To DevOps</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 98.50%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img2} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Introduction To Agile Development And Scrum</h5>
                                <p class="card-text"> Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img3} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Server-side Development with NodeJS, Express and MongoDB</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img4} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Front-End Web UI Frameworks and Tools: Bootstrap 4</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img5} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Data Collection and Processing with Python</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img6} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Introduction to Cloud Computing</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img7} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Front-End Web Development with React</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img8} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Python Functions, Files, and Dictionaries</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img9} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">Full-Stack Web Development with React</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                    <br/>

                    <div className="col-md-4 mt-4">
                        <div class="card" >
                            <img src={img10} alt="Ma photo de profil" style={{width: 400, height: 200}}/>
                            <div class="card-body">
                                <h5 class="card-title">DevOps, Cloud, and Agile Foundations</h5>
                                <p class="card-text">Coursera</p>
                                <h6 class="card-text">Grade Achieved: 100%</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Certificates;