/// <reference types="react" />
import { useStateMachineProps } from "../hooks";
export declare type AutocompleteProProps = {
    states: useStateMachineProps;
    onChange?: (value: string) => void;
};
declare const AutocompletePro: ({ states, onChange, ...params }: AutocompleteProProps) => JSX.Element;
export default AutocompletePro;
