import React from 'react';
import classes from './toolItem.scss';
import styleText from './../../styles/_typography.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const toolItem = (props) => {

    return (
        <div className={classes.Item} style={props.note ? {cursor: 'pointer'} : {cursor: 'default'}} onClick={props.note ? () => {props.onClick(props.id)} : null}>
            <img className={classes.Img} src={props.url} alt={props.alt}/>
            <div className={classes.ToolInfoBox}>
                <p className={[styleText.Info, styleText.Info___tools].join(' ')}>{props.info}</p>
            </div>
            <div className={`${classes.Back} ${props.isFlipped ? classes.IsFlipped : ''}`}>
                <div className={classes.CloseBox}>
                    <FontAwesomeIcon icon={faTimes} className={classes.Close} />
                </div>
                <div className={classes.TextBox}>
                    <p className={[styleText.Info, styleText.Info___skills].join(' ')}>{props.backInfo}</p>
                </div> 
            </div> 
        </div>
    );
}

export default toolItem;