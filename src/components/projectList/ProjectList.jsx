import React from 'react'
import './projectList.css'
import Project from './../project/Project'
import { projects } from '../../data'
const ProjectList = () =>
{

    return (
        <div className='pl' id='projects'>
            <div className="pl-text">
                <h1 className="pl-title">Personal Projects</h1>
                <p className="pl-desc">desc</p>
            </div>
            <div className="pl-list">
                {/* <Project key={8} img='https://tcf.admeen.org/game/1500/1030/400x246/tetris-2.jpg' link={'http://www.facebook.com/arturo120'} /> */}
                {projects.map((item) =>
                {
                    return (
                        <Project key={item.id} img={item.img} link={item.link} />
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectList