import React, { Component } from 'react';
import { findItem } from './../../share';

import classes from './projects.scss';
import slogan from './../../assets/images/projects.png';
import ProjectItem from './../ProjectItem/ProjectItem';
import styleText from './../../styles/_typography.scss';
import url1 from './../../assets/images/screen-salon.png';
import url2 from './../../assets/images/screen-travel.png';
import url3 from './../../assets/images/screen-photography.png';
import url4 from './../../assets/images/screen-cukiernia.png';
import url5 from './../../assets/images/screen-cv.png';
import url6 from './../../assets/images/screen-weather-app.png';
import url7 from './../../assets/images/screen-app.png';
import url8 from './../../assets/images/screen-memo.png';
import url9 from './../../assets/images/screen-portfolio.png';
import url10 from './../../assets/images/screen-books.png';


const appTitle = "What's the weather?";
const check = '\u25CF';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state= {
            projects: [
                {id: 0, url: url10, alt: 'Foto 1', info: 'Aplikacja do sprzedaży książek -', title: '"Re-reading books" APP W BUDOWIE', backInfo:`${check} HTML5 (Pug) ${check} CSS3 (SCSS) ${check} JS ${check} Express.js ${check} MongoDB + Mongoose`, isFlipped: false, live: '.', github: '.', isActive: false},
                {id: 1, url: url9, alt: 'Foto 2', info: 'Strona internetowa -', title: '"Portfolio v2.0"', isFlipped: false, backInfo: `${check} React.js ${check} CSS3 (SCSS) ${check} JS ${check} GSAP ${check} Webpack 4`, live: 'https://angelika7.github.io/portfolioV2/public/', github: 'https://github.com/angelika7/portfolioV2', isActive: true},
                {id: 2, url: url8, alt: 'Foto 3', isActive: true, info: 'Aplikacja memo - gra -', title: '"MemoCats App"', isFlipped: false, backInfo: `${check} React.js ${check} Redux ${check} JS ${check} CSS3 + SVG ${check} Firebase ${check} Webpack 4`, live: 'https://angelika7.github.io/memo-cats-app/public/', github: 'https://github.com/angelika7/memo-cats-app'},
                {id: 3, url: url7, alt: 'Foto 4', isActive: true, info: 'Aplikacja do oceniania wrocławskich kawiarni -', title: '"Because I love coffee..."', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS + Local Storage ${check} API Zomato ${check} Express.js ${check} Webpack 4`, live: 'https://angelika7.github.io/repo-search-cafes/public/', github: 'https://github.com/angelika7/repo-search-cafes'},
                {id: 4, url: url6, alt: 'Foto 5', isActive: true, info: 'Kieszonkowa aplikacja pogodowa -', title: `"${appTitle}"`, isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) + SVG ${check} JS ${check} API Open Weather Map`, live: 'https://angelika7.github.io/weather-app/public/', github: 'https://github.com/angelika7/weather-app'},
                {id: 5, url: url5, alt: 'Foto 6', isActive: true, info: 'Strona internetowa -', title: '"Portfolio v1.0"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS ${check} Express.js ${check} Grunt.js`, live: 'https://my-portfolio-cv.herokuapp.com/', github: 'https://github.com/angelika7/portfolio'},
                {id: 6, url: url4, alt: 'Foto 7', isActive: true, info: 'Strona internetowa cukierni -', title: '"Manufaktura słodyczy"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS + jQuery`, live: 'https://angelika7.github.io/cukiernia-repo/', github: 'https://github.com/angelika7/cukiernia-repo'},
                {id: 7, url: url3, alt: 'Foto 8', isActive: true, info: 'Strona internetowa o fotografii (PSD to HTML) -', title: '"In the woods"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} jQuery + WOW.js ${check} Bootstrap 4`, live: 'https://angelika7.github.io/photography-website-repo/', github: 'https://github.com/angelika7/photography-website-repo'},
                {id: 8, url: url2, alt: 'Foto 9', isActive: true, info: 'Strona internetowa o podróżach (PSD to HTML) -', title: '"Lets get lost"', isFlipped: false, backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} jQuery + WOW.js ${check} Grunt.js`, live: 'https://angelika7.github.io/travelling-website-repo/', github: 'https://github.com/angelika7/travelling-website-repo'},
                {id: 9, url: url1, alt: 'Foto 10', isActive: true, info: 'Strona internetowa salonu fryzjerskiego -', title: '"Wiktoria"', backInfo: `${check} HTML5 ${check} CSS3 (SCSS) ${check} JS`, isFlipped: false, live: 'https://angelika7.github.io/salon-repo/', github: 'https://github.com/angelika7/salon-repo'}
            ],
        }
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler = (id) => {
        const projects = [...this.state.projects]
        findItem(projects, id);
        this.setState({projects})
    } 

    render() {

        return (
            <section className={classes.Projects} id='projects'>
                <div className={classes.SloganBox}>
                    <img className={classes.Slogan} src={slogan} alt='Text'/>
                </div>
                <div className={classes.InfoBox}><p className={styleText.TextInfo}>- kliknij na projekt, żeby dowiedzieć się więcej</p></div>
                <div className={classes.ProjectsBox}>
                {this.state.projects.map((e, i) => {
                        return <ProjectItem key={i} info={e.info} active={e.isActive} title={e.title} bgImage={`url(${e.url})`} alt={e.alt} backInfo={e.backInfo} id={e.id} isFlipped={e.isFlipped} live={e.live} github={e.github} onClick={this.onClickHandler}/>
                    })}
                </div>
            </section>
        
        )
    }
};

export default Projects;