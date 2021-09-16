
import * as React from 'react';
type Props = {
    children:any;
};
// FSC
export const Comlist = (props: Props) => {
    return (
        <div>
            Comlist
            <div>
                {props.children}
            </div>
        </div>
    );
};