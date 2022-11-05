import { Field, State } from "./types";
export declare type useStateMachineProps = {
    init: number;
    states: State[];
};
interface ReturnUseStateMachine {
    nextState: () => void;
    data: Field[];
    change: (selectedValue: string) => void;
    state: State;
    reset: () => void;
}
declare const useStateMachine: ({ init, states }: useStateMachineProps) => ReturnUseStateMachine;
export default useStateMachine;
