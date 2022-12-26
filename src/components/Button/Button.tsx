import React, {FC, memo} from 'react';

export interface ButtonProps
    extends React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    > {
    children: React.ReactNode;
}

export const Button: FC<ButtonProps> = memo(({ onClick, disabled, children, ...props }) => {
    const handleOnClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (disabled) {
            e.preventDefault()
            e.stopPropagation()
            return
        }

        if (onClick) onClick(e)
    }

    return (
        <button {...props} onClick={handleOnClick}>
            {children}
        </button>
    );
});