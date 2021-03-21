import React from 'react';
import propTypes from 'prop-types';
import styles from './Day.module.scss';
import {format} from 'date-fns';

const Day = ({currentDate}) => {
    return (
        <div class={styles.wrapper}>
            <div className={styles.name}>{format(currentDate, 'iiii')}</div>
            <div className={styles.number}>{format(currentDate, 'd')}</div>
        </div>
    );
};
Day.propTypes = {
    currentDate: propTypes.instanceOf(Date).isRequired,
};
export default Day;