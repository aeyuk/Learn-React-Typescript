import { ChildAsFc } from './Child';
/*  Importing ChildAsFc instead of Child allows Child to be able to directly receive children
    as props, rather than only taking color and onClick from the parent.
*/

const Parent = () => {
    return (
        <ChildAsFc color="Orange" onClick={() => {console.log("Clicked")}}>
        
        </ChildAsFc>
    );
};

export default Parent;