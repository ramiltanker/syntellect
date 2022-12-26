import React from 'react';
import {Control} from '../Control/Control';
import style from '../ControlWithButtons/ControlWithButtons.module.css';

export const ControlAutoComplete = () => {
    const [value, setValue] = React.useState('');
    return (
        <Control>
                <Control.Input className={style.input} value={value} onChange={handleOnChange}/>
        </Control>
    );
};