import React, { Component } from 'react';
import ToolItem from './../ToolItem/ToolItem';
import classes from './stack.scss';
import styleText from './../../styles/_typography.scss';
import data from './../../data/stack.data';

import tulips from './../../assets/images/tulips-bg.jpg';
import info from './../../assets/images/letters.png';
import tools from './../../assets/images/tools.png';
import { findItem } from './../../share';

class Stack extends Component {

    onClickHandler = (id) => {
        const toolsArray = data.toolsArray;
        findItem(toolsArray, id);
        this.setState({toolsArray})
    }

    render() {
        return (
            <section className={classes.stack} id='stack'>
                <div className={classes.tools}>
                    <img className={classes.toolsHeading} src={tools} alt="Umiejętności"/>
                    <div className={classes.textBox}>
                        <p className={styleText.textInfo}>- kliknij na narzędzie z łapką, żeby zobaczyć szczegóły</p>
                    </div>
                    <div className={classes.toolsBox}> 
                        {data.toolsArray.map((e, i) => {
                            return <ToolItem key={i} info={e.info} url={e.url} alt={e.alt} backInfo={e.backInfo} id={e.id} isFlipped={e.isFlipped} note={e.note} onClick={this.onClickHandler}/>
                        })}
                    </div>
                </div>
                <div className={classes.infoBox}>
                    <img className={classes.tulips} src={tulips} alt=''/>
                    <div className={classes.box}>
                        <img className={classes.info} src={info} alt=''/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Stack;