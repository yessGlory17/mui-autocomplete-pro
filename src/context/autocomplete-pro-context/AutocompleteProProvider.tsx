import { createContext, ReactNode, useState } from "react";
import { State } from "../../hooks";

type AutocompleteProContextProps = {
    currentState: State | null;
    updateProviderState: (state: State) => void;
}

export const AutocompleteProContext = createContext<AutocompleteProContextProps | null>(null);


type AutocompleteProProviderProps = {
    children?: ReactNode;
}

export const AutocompleteProProvider = ({ children }: AutocompleteProProviderProps) => {
    const [currentState, setCurrentState] = useState<State | null> (null);

    const updateProviderState = (state: State) => {
        setCurrentState(state);
    }

    return <AutocompleteProContext.Provider value={{currentState, updateProviderState}}> {children} </AutocompleteProContext.Provider>
}

export default AutocompleteProProvider;