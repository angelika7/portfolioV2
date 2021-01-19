import React from 'react';
import classes from './footer.scss';
import styleText from './../../styles/_typography.scss';

const footer = () => (
    <footer className={classes.footer}>
        <p className={[styleText.info, styleText.info___footer].join(' ')}>Portfolio v2.0. A. Chochorowska 2021. &copy; wszystkie prawa zastrzeżone</p>
    </footer>
);

export default footer;