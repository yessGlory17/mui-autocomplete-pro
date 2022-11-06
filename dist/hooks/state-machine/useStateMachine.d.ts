import { Field, State } from "./types";
export declare type useStateMachineProps = {
    init: number;
    states: State[];
};
declare type DataGetter = () => Field[];
interface ReturnUseStateMachine {
    nextState: () => void;
    data: Field[] | DataGetter;
    change: (selectedValue: string) => void;
    state: State;
    reset: () => void;
}
declare const useStateMachine: ({ init, states }: useStateMachineProps) => ReturnUseStateMachine;
export default useStateMachine;
