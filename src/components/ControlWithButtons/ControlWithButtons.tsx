import React, {useCallback} from 'react';
import {Control} from '../Control/Control';
import style from './ControlWithButtons.module.css';

export const ControlWithButtons = () => {
    const [value, setValue] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };
    const handleOnChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2(event.target.value);
    };

    const clearControl = useCallback(() => {
        setValue('');
    }, []);

    const changeControlText = useCallback((text: string) => {
        setValue(text);
    }, []);

    const callAlert = useCallback(() => {
        if (value2) {
            alert(value2);
        } else {
            alert('Control is empty')
        }
    }, [value2]);

    const callAlert2 = useCallback(() => {
        if (value2 !== '' && typeof +value2 === 'number' && !isNaN(+value2)) {
            alert(value2);
        }
    }, [value2]);

    return (
        <>
            <Control>
                <Control.Container className={style.container}>
                    <Control.Container className={style.rightButtons}>
                        <Control.Button onClick={clearControl}>Button №1</Control.Button>
                        <Control.Button onClick={() => changeControlText('Hello world!')}>Button №2</Control.Button>
                    </Control.Container>
                    <Control.Input className={style.input} value={value} onChange={handleOnChange}/>
                </Control.Container>
            </Control>

            <Control>
                <Control.Container className={style.container}>
                    <Control.Container className={style.rightButtons}>
                        <Control.Button onClick={callAlert}>Button Right</Control.Button>
                    </Control.Container>
                    <Control.Input className={style.input} value={value2} onChange={handleOnChange2}/>
                    <Control.Container className={style.leftButtons}>
                        <Control.Button onClick={callAlert2}>Button Left</Control.Button>
                    </Control.Container>
                </Control.Container>
            </Control>
        </>
    );
};