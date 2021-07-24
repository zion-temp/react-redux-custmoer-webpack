import React,{FC,useContext} from "react";


export const themes = {
   
    count:0
};
  
interface dType {
    foreground:string;
    background:string;
}
interface themType {
    count:number;
}
interface actionType {
    type:string
}

export function reducer(state:themType, action:actionType) {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            throw new Error();
    }
}
export  const ThemeContext = React.createContext<themType>(themes);
  