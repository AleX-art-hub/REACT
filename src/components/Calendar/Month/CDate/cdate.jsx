import React from 'react';
import styles from './CDate.module.scss';
import className from 'classnames';
import PropTypes from 'prop-types';
import {format, isSameDay, isSameMonth} from 'date-fns';

const CDate = ({dayDate, date, currentDate}) => {
    const isCurrent = isSameMonth(dayDate, currentDate) && isSameDay(dayDate, currentDate);
    const className = classNames(styles.cell, {
        [styles.currentDate]: isCurrent,
        [styles.otherMonth]: !isSameMonth(dayDate, date)
    });
    return <li className={className}>{format(dayDate, 'd')}</li>
};

CDate.propTypes = {
    dayDate: PropTypes.instanceOf(Date).isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    currentDate: PropTypes.instanceOf(Date),
};

CDate.defaultProps = {
    currentDate: new Date(),
};

export default CDate;