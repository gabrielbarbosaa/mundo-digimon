import { initalState } from "../states";
import { LIST_DIGIMON } from "../actions";

export const reducer = (state = initalState, action: any) => {
    switch (action.type) {
        case LIST_DIGIMON: 
            return { ...state, digimons: action.digimons}
        
            default: 
                return { ...state}
    }
}