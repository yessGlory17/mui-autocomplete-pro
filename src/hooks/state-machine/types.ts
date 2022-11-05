export type Field = {
    value: string;
    id: number;
}

export type ValueFunction = (previous: State) => Field[];

export type State = {
    type: string;
    value: Field[];
    callback?:() => void;
    condition?:(previous:State, selectedValue: string) => string;
    next: string;
}