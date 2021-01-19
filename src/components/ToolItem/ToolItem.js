import React from 'react';
import classes from './toolItem.scss';
import styleText from './../../styles/_typography.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const toolItem = (props) => {

    return (
        <div className={classes.item} style={props.note ? {cursor: 'pointer'} : {cursor: 'default'}} onClick={props.note ? () => {props.onClick(props.id)} : null}>
            <img className={classes.img} src={props.url} alt={props.alt}/>
            <div className={classes.toolInfoBox}>
                <p className={[styleText.info, styleText.info___tools].join(' ')}>{props.info}</p>
            </div>
            <div className={`${classes.back} ${props.isFlipped ? classes.isFlipped : ''}`}>
                <div className={classes.closeBox}>
                    <FontAwesomeIcon icon={faTimes} className={classes.close} />
                </div>
                <div className={classes.textBox}>
                    <p className={[styleText.info, styleText.info___skills].join(' ')}>{props.backInfo}</p>
                </div> 
            </div> 
        </div>
    );
}

export default toolItem;