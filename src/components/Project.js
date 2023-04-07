import React from "react";


function Project(props) {
    return (
        <div>
            <img src={`../assets/${props.img}`} alt='project'></img>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <ul>
                    {props.tag1 && <li>{props.tag1}</li>}
                    {props.tag2 && <li>{props.tag2}</li>}
                    {props.tag3 && <li>{props.tag3}</li>}
                    {props.tag4 && <li>{props.tag4}</li>}
                    {props.tag5 && <li>{props.tag5}</li>}
                    {props.tag6 && <li>{props.tag6}</li>}
                    {props.tag7 && <li>{props.tag7}</li>}
                    {props.tag8 && <li>{props.tag8}</li>}
                </ul>
                <div>
                    <a href={props.projectUrl}>
                        <button>See Live</button>
                    </a>
                    <a href={props.githubUrl}>
                        <button>Code</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project;