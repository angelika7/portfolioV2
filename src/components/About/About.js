import React, { useRef } from 'react';
import { useIntersection } from 'react-use';
import classes from './about.scss';
import './about.scss';
import styles from './../../styles/_typography.scss';
import aboutText from './../../assets/images/about.png';
import me1 from './../../assets/images/about1-min.jpg';
import me2 from './../../assets/images/about2-min.jpg';
import me3 from './../../assets/images/about6-min.jpg';
import me4 from './../../assets/images/about4-min.jpg';

import gsap from 'gsap';

function About(){
    const sectionRef = useRef(null);
    const intersection = useIntersection(sectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: .3
    });

    //FadeIn
    const fadeIn = element => {
        gsap.fromTo(element, {opacity: 0, y: '-=20'}, {opacity: 1, y: '+=20', duration: 1, easy: "power4.out",});
    }; 

    //FadeOut
    const fadeOut = element => {
        gsap.to(element, 1, {
            opacity: 0,
            y: 20,
            easy: "power4.out"
        });
    };

    //Checking to see when the vieport is visible to the user
    intersection && intersection.intersectionRatio < 0.3
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn") 
    
    return (
        <section className={classes.About} id='about' ref={sectionRef}>
            <div className={classes.SloganBox}>
                <img className={classes.Slogan} src={aboutText} alt='Text'/>
            </div>
            <div className={classes.LeftSide} className='fadeIn'> 
                <div className={classes.DescriptionBox}>
                    <div className={classes.Description}>
                        <p className={styles.TextInfo}>Cześć! Mam na imię Angelika, z wykształcenia jestem socjologiem, ale to właśnie programowanie stało się moją ogromną pasją. Od ponad 1.5 roku, sama uczę się frontendu. Korzystam z Internetu (kursów na Udemy, YouTube'a, blogów, forów i platform do nauki). Lubię pracę kreatywną, sprawia mi ona wielką frajdę i daje satysfakcję. Do tej pory byłam Copywriterem, obecnie szukam pracy, na stanowisku Front-end Developera.</p>
                    </div>
                </div>
            </div>
            <div className={classes.RightSide} className='fadeIn'>
                <div className={classes.FotoBox}>
                    <figure className={classes.FotoBox_foto}>
                        <img className={classes.FotoBox_foto___one} src={me1} alt='Foto 1'></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={classes.FotoBox_foto___two} src={me4} alt='Foto 2'></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={classes.FotoBox_foto___three} src={me2} alt='Foto 3'></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={classes.FotoBox_foto___four} src={me3} alt='Foto 4'></img>
                    </figure>
                </div>
            </div>
        </section>
    
    )
};

export default About;