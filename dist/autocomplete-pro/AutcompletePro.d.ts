/// <reference types="react" />
import { useStateMachineProps } from "../hooks";
export declare type AutocompleteProProps = {
    states: useStateMachineProps;
    change?: (selectedValue: string) => void;
};
declare const AutocompletePro: ({ states, change }: AutocompleteProProps) => JSX.Element;
export default AutocompletePro;
