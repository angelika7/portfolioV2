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
        <section className={classes.About} id='about' ref={ref}>
        <div className={classes.SloganBox}>
            <img className={classes.Slogan} src={aboutText} alt='O mnie'/>
        </div>
        
            <div className={visible ? [classes.LeftSide, classes.FadeIn].join(' ') : [classes.LeftSide, classes.FadeOut].join(' ')}> 
                <div className={classes.DescriptionBox}>
                    <div className={classes.Description}>
                        <p className={styles.TextInfo}>Cześć! Mam na imię Angelika z wykształcenia jestem socjologiem, ale to właśnie programowanie stało się moją ogromną pasją. Od ponad 1.5 roku, sama uczę się frontendu. Korzystam z Internetu (kursów na Udemy, YouTuba, blogów, forów i platform do nauki). Lubię pracę kreatywną, do tej pory byłam Copywriterem. Szukam pracy, która pozwoli mi rozwijać zdobyte do tej pory umiejętności i poznać ciekawych ludzi.</p>
                    </div>
                </div>
            </div>
            <div className={classes.RightSide} ref={ref}>
                <div className={classes.FotoBox}>
                    <figure className={classes.FotoBox_foto}>
                        <img className={visible ? [classes.FotoBox_foto___one, classes.AnimationImg].join(' ') : classes.FotoBox_foto___one} src={me1} alt=''></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={visible ? [classes.FotoBox_foto___two, classes.AnimationImg].join(' ') : classes.FotoBox_foto___two} src={me4} alt=''></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={visible ? [classes.FotoBox_foto___three, classes.AnimationImg].join(' ') : classes.FotoBox_foto___three} src={me2} alt=''></img>
                    </figure>
                    <figure className={classes.FotoBox_foto}>
                        <img className={visible ? [classes.FotoBox_foto___four, classes.AnimationImg].join(' ') : classes.FotoBox_foto___four} src={me3} alt=''></img>
                    </figure>
                </div>
            </div>
        
        
        
    </section>
    
)};

export default About;