import React from "react";
import StaticJobs from "./StaticJobs";
import '../css/jobslist.css'
import data from '../data.json';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const JobsList = (props) => {

    const filterJobs = data.filter((jobs) => {
        
        const roleMatch = jobs.position.toLowerCase().includes(props.searchInput.toLowerCase());
        
        const languageMatch = jobs.languages.some((language) => 
            language.toLowerCase().includes(props.searchInput.toLowerCase())
        );
        
        const levelMatch = jobs.level.toLowerCase().includes(props.searchInput.toLowerCase());

        const toolsMatch = jobs.tools.some((tools)=> tools.toLowerCase().includes(props.searchInput.toLowerCase()))
        
        return roleMatch || languageMatch || levelMatch || toolsMatch;
    })

    const container = React.useRef(null)

    useGSAP(() => {
        gsap.from(container.current.children,{
           opacity:0,
           y:-150,
           duration:1,
           stagger:0.5,
           ease:"in"
        })
    },{scope:container})

    const jobsList = filterJobs.map((jobs) => (
        <StaticJobs key={jobs.id} jobs={jobs} className='jobs--item'/>
    )) 
    return(
        <div>
            <nav>
                <div>
                    <input 
                        type="text" 
                        className="jobslist--input" 
                        onChange={props.handleChange}
                        value={props.searchInput}
                    />
                </div>
            </nav>
            <div ref={container} >
                {jobsList}
            </div>
        </div>
    )
}
export default JobsList;