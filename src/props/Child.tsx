interface ChildProps {
    color: string;
}

/* Typescript doesn't know that this is specifically a React function component.
This method is fine, so long as you don't need access to propTypes, contextTypes,
defaultProps, and displayName.
*/
export const Child = ({ color }: ChildProps ) => {
    return <div>Child: {color}</div>
};

/* Another way of defining a function component with Typescript.
This way tells Typescript that this is specifically a React function componenet,
and that 'Child' might have properties assigned to it like 'propTypes' and 'contextTypes'.
'Child' will receive props of type ChildProps
*/
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
    return <div>{color}</div>
}

ChildAsFC.displayName