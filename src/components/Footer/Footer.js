import React from 'react';
import classes from './footer.scss';
import styleText from './../../styles/_typography.scss';

const footer = () => (
    <footer className={classes.Footer}>
        <p className={[styleText.Info, styleText.Info___footer].join(' ')}>Portfolio v2.0. A. Chochorowska 2020. &copy; wszystkie prawa zastrzeżone</p>
    </footer>
);

export default footer;