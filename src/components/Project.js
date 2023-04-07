import React from "react";


function Project(props) {
    return (
        <div className="flex-1 container mx-auto pb-6">
            <div className="sm:flex py-4 flex flex-wrap">
            <img src={props.img} alt='project' className='rounded-lg sm:max-w-xs drop-shadow-lg'></img>
                <div className="flex flex-col font-secondary p-6 text-[#1a1818]">
                    <h3 className='h3 font-primary mb-[-1px]'>{props.title}</h3>
                    <p className="p-2">{props.description}</p>
                    <ul className="flex flex-wrap p-2 mb-[-12px]">
                        {props.tag1 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag1}</li>}
                        {props.tag2 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag2}</li>}
                        {props.tag3 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag3}</li>}
                        {props.tag4 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag4}</li>}
                        {props.tag5 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag5}</li>}
                        {props.tag6 && <li className="tag bg-[#d3cfca] text-[#7e7b79]s">{props.tag6}</li>}
                        {props.tag7 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag7}</li>}
                        {props.tag8 && <li className="tag bg-[#d3cfca] text-[#7e7b79]">{props.tag8}</li>}
                    </ul>
                    <div className="p-4">
                        <a href={props.projectUrl}>
                            <button className="tag">See Live</button>
                        </a>
                        <a href={props.githubUrl}>
                            <button className="tag">Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;