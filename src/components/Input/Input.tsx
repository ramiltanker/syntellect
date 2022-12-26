import React, {FC, memo} from 'react';

export interface InputProps extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<InputProps> = memo(({children, value, onChange, ...props}) => {
    return (
            <input type="text" {...props} value={value} onChange={onChange} />
    );
});