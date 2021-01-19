import React, { useEffect, useState, useRef } from 'react';
import classes from './about.scss';
import styles from './../../styles/_typography.scss';
import aboutText from './../../assets/images/about.png';
import me1 from './../../assets/images/about1-min.jpg';
import me2 from './../../assets/images/about2-min.jpg';
import me3 from './../../assets/images/about6-min.jpg';
import me4 from './../../assets/images/about4-min.jpg';

function UseOnScreen(options) {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
        }, options)

        if(ref.current) {
            observer.observe(ref.current)
        }

        return() => {
            if(ref.current) {
                observer.unobserve(ref.current)
            }
        }
    }, [ref, options])
    return [ref, visible]
} 

function About(){
    const [ref, visible] = UseOnScreen({threshold: 0.4});
    
    return (
        <section className={classes.about} id='about' ref={ref}>
        <div className={classes.sloganBox}>
            <img className={classes.slogan} src={aboutText} alt='O mnie'/>
        </div>
        
            <div className={visible ? [classes.leftSide, classes.fadeIn].join(' ') : [classes.leftSide, classes.fadeOut].join(' ')}> 
                <div className={classes.descriptionBox}>
                    <div className={classes.description}>
                        <p className={styles.textInfo}>Cześć! Mam na imię Angelika z wykształcenia jestem socjologiem, ale to właśnie programowanie stało się moją ogromną pasją. Od ponad 1.5 roku, sama uczę się frontendu. Korzystam z Internetu (kursów na Udemy, YouTuba, blogów, forów i platform do nauki). Lubię pracę kreatywną, do tej pory byłam Copywriterem. Szukam pracy, która pozwoli mi rozwijać zdobyte do tej pory umiejętności i poznać ciekawych ludzi.</p>
                    </div>
                </div>
            </div>
            <div className={classes.rightSide} ref={ref}>
                <div className={classes.fotoBox}>
                    <figure className={classes.fotoBox_foto}>
                        <img className={visible ? [classes.fotoBox_foto___one, classes.animationImg].join(' ') : classes.fotoBox_foto___one} src={me1} alt=''></img>
                    </figure>
                    <figure className={classes.fotoBox_foto}>
                        <img className={visible ? [classes.fotoBox_foto___two, classes.animationImg].join(' ') : classes.fotoBox_foto___two} src={me4} alt=''></img>
                    </figure>
                    <figure className={classes.fotoBox_foto}>
                        <img className={visible ? [classes.fotoBox_foto___three, classes.animationImg].join(' ') : classes.fotoBox_foto___three} src={me2} alt=''></img>
                    </figure>
                    <figure className={classes.fotoBox_foto}>
                        <img className={visible ? [classes.fotoBox_foto___four, classes.animationImg].join(' ') : classes.fotoBox_foto___four} src={me3} alt=''></img>
                    </figure>
                </div>
            </div>
        
        
        
    </section>
    
)};

export default About;