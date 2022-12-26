import React, {FC} from 'react';

interface ContainerProps extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> {
    children: React.ReactNode;
}
export const Container: FC<ContainerProps> = ({children, ...props}) => {
    return (
        <div {...props}>
            {children}
        </div>
    );
};