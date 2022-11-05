import { ReactNode } from "react";
import { State } from "../../hooks";
declare type AutocompleteProContextProps = {
    currentState: State | null;
    updateProviderState: (state: State) => void;
};
export declare const AutocompleteProContext: import("react").Context<AutocompleteProContextProps | null>;
declare type AutocompleteProProviderProps = {
    children?: ReactNode;
};
export declare const AutocompleteProProvider: ({ children }: AutocompleteProProviderProps) => JSX.Element;
export default AutocompleteProProvider;
