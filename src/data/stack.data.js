import react from './../assets/images/react.png';
import js from './../assets/images/js.png';
import node from './../assets/images/node.png';
import jquery from './../assets/images/jquery.png';
import html from './../assets/images/html.png';
import css from './../assets/images/css.png';
import grunt from './../assets/images/grunt.png';
import webpack from './../assets/images/webpack.png';
import git from './../assets/images/git.png';
import npm from './../assets/images/npm.png';
import sass from './../assets/images/sass.png';
import mongo from './../assets/images/mongo.png';
import bootstrap from './../assets/images/bootstrap.png';
import express from './../assets/images/express.png';

const check = '\u25CF';

export default {
    toolsArray: [
        {id: 0, url: html, alt: 'Html5 Icon', info: 'HTML5', note: true, backInfo:`${check} znaczniki semantyczne html5 ${check} uniwersalne bloki wielokrotnego użytku`, isFlipped: false},
        {id: 1, url: css, alt: 'CSS3 Icon', info: 'CSS3', note: true, isFlipped: false, backInfo:`${check} flex/grid ${check} @keyframes ${check} @media - RWD ${check} metodyka BEM i OOCSS`},
        {id: 2, url: js, alt: 'JS Icon', info: 'Java Script', note: true, isFlipped: false, backInfo:`${check} ES6+ ${check} closures / scope / klasy / promises / API ${check} MVC ${check} Local Storage`},
        {id: 3, url: react, alt: 'ReactJs Icon', info: 'React.js', note: true, isFlipped: false, backInfo:`${check} styled-components ${check} react-router ${check} hooks ${check} redux`},
        {id: 4, url: express, alt: 'ExpressJs Icon', info: 'Express.js', note: true, isFlipped: false, backInfo:`${check} routing ${check} konfiguracja webowa (port, lokalizacja szablonów do generowania widoków) ${check} middleware ${check} error handling`},
        {id: 5, url: node, alt: 'NodeJs Icon', info: 'Node.js', note: true, isFlipped: false, backInfo:`${check} tworzenie serwera`},
        {id: 6, url: mongo, alt: 'MongoDB Icon', info: 'MongoDB', note: true, isFlipped: false, backInfo:`${check} tworzenie bazy danych z wykorzystaniem Mongoose`},
        {id: 7, url: jquery, alt: 'jQuery Icon', info: 'jQuery', note: false, isFlipped: false},
        {id: 8, url: bootstrap, alt: 'Bootstrap Icon', info: 'Bootstrap4', note: false, isFlipped: false},
        {id: 9, url: sass, alt: 'Sass Icon', info: 'Sass (Scss)', note: false, isFlipped: false},
        {id: 10, url: webpack, alt: 'Webpack Icon', info: 'Webpack', note: false, isFlipped: false},
        {id: 11, url: grunt, alt: 'GruntJs Icon', info: 'Grunt.js', note: false, isFlipped: false},
        {id: 12, url: git, alt: 'Git Icon', info: 'Git', note: false, isFlipped: false},
        {id: 13, url: npm, alt: 'NPM Icon', info: 'NPM', note: false, isFlipped: false}
    ]
}