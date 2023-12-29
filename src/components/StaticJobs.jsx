import React from "react";
import "../css/staticJobs.css";


const StaticJobs = (props) => {

    return(
        <div>
            <section className="static">

                <section className="static--firstContainer">
                    <img src={props.jobs.logo} alt="logo" className="static--logo"/>
                </section>

                <section className="static--middleContainer">
                    <div className="static--middle__top">
                        <h5>{props.jobs.company}</h5>
                        <h6>{props.jobs.new && <span className="static--new">New!</span>}</h6>
                        <h6>{props.jobs.featured && <span className="static--featured">Featured</span>}</h6>
                    </div>
                    <div className="static--middle__middle">
                        <h1>{props.jobs.position}</h1>
                    </div>
                    <div className="static--middle__below">
                        <p>{props.jobs.postedAt}</p>
                        <p>.</p>
                        <p>{props.jobs.contract}</p>
                        <p>.</p>
                        <p>{props.jobs.location}</p>
                    </div>
                </section>

                <section className="static--lastContainer">
                    {/* <h4>Frontend</h4>
                    <h4>Senior</h4>
                    <h4>HTML</h4>
                    <h4>CSS</h4>
                    <h4>Javascript</h4> */}
                   
                    {/* <p>{props.jobs.languages.join(' ')} {props.jobs.tools.join(' ')}</p> */}

                    {props.jobs.languages.map((languages)=>(
                        <p>{languages}</p>
                    ))} {props.jobs.tools.map((tools)=>(
                        <p>{tools}</p>
                    ))}
                </section>

            </section>
        </div>
    )
}
export default StaticJobs;