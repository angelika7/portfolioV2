import React, { Component } from 'react';
import { findItem } from './../../share';

import classes from './projects.scss';
import slogan from './../../assets/images/projects.png';
import styleText from './../../styles/_typography.scss';
import data from './../../data/projects.data';
import ProjectItem from './../ProjectItem/ProjectItem';

class Projects extends Component {

    onClickHandler = (id) => {
        const projects = data.projects;
        findItem(projects, id);
        this.setState({projects})
    } 

    render() {
        return (
            <section className={classes.projects} id='projects'>
                <div className={classes.sloganBox}>
                    <img className={classes.slogan} src={slogan} alt='Text'/>
                </div>
                <div className={classes.infoBox}><p className={styleText.textInfo}>- kliknij na projekt, żeby dowiedzieć się więcej</p></div>
                <div className={classes.projectsBox}>
                {data.projects.map((e, i) => {
                        return <ProjectItem key={i} info={e.info} active={e.isActive} title={e.title} bgImage={`url(${e.url})`} alt={e.alt} backInfo={e.backInfo} id={e.id} isFlipped={e.isFlipped} live={e.live} github={e.github} onClick={this.onClickHandler}/>
                    })}
                </div>
            </section>
        
        )
    }
};

export default Projects;