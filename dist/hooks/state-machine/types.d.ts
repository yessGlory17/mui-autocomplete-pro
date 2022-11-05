export declare type Field = {
    value: string;
    id: number;
};
export declare type ValueFunction = (previous: State) => Field[];
export declare type State = {
    type: string;
    value: Field[];
    callback?: () => void;
    condition?: (previous: State, selectedValue: string) => string;
    next: string;
};
