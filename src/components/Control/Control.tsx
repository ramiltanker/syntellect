import React from 'react';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import {Container} from '../Container/Container';

interface ControlProps {
    children: React.ReactNode;
}

export const Control = ({children}: ControlProps) => {
    return (
        <div className="control">
            {children}
        </div>
    );
};

Control.Input = Input;
Control.Button = Button;
Control.Container = Container;