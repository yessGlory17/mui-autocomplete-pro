export type Field = {
    value: string;
    id: number;
}

export type ValueFunction = (previous: State | null, selected: unknown) => Field[];

export type State = {
    type: string;
    value: Field[] | ValueFunction;
    callback?:() => void;
    onSelectedCondition?:(previous:State, selectedValue: string) => string;
    onChangeCondition?: (previous: State, value: string) => string;
    next: string;
}