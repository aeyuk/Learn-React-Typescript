interface ChildProps {
    color: string;
    onClick: () => void;
}

/* Typescript doesn't know that this is specifically a React function component.
This method is fine, so long as you don't need access to propTypes, contextTypes,
defaultProps, and displayName.
*/
export const Child = ({ color, onClick }: ChildProps) => {
    return (
        <div>
            Child: {color}
            <button color="red" onClick={onClick}>Click me</button>
        </div>
    );
};

/* Another way of defining a function component with Typescript.
This way tells Typescript that this is specifically a React function componenet,
and that 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'.
'Child' will receive props of type ChildProps
*/
export const ChildAsFc: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return ( <div>{color}</div> );
}