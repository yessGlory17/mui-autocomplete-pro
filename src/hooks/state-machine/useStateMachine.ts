import { useEffect, useState } from "react";
import { Field, State } from "./types";

export type useStateMachineProps = {
    init: number;
    states: State[];
}

interface ReturnUseStateMachine {
  nextState: () => void;
  data: Field[];
  change: (selectedValue: string) => void;
  state: State;
}

const useStateMachine = ({init, states}: useStateMachineProps): ReturnUseStateMachine => {
  const [currentState, setState] = useState<State>(states[init ?? 0]); //init state
  const [previous, setPrevious] = useState<State | null>(null);

  useEffect(() => {
    console.log(`Current State: `, currentState);
    console.log(`Previous State: `, previous);
  }, [currentState, setState, previous, setPrevious]);

  const findState = (next: string) => {
    let result: State = {
      type: "",
      value: [],
      callback: () => {},
      next: ""
    };
    for (let i = 0; i < states.length; i++) {
      if (states[i].type === next) {
        result = states[i];
        break;
      }
    }
    return result;
  };

  const nextState = () => {
    for (let i = 0; i < states.length; i++) {
      if (states[i].type === currentState?.type) {
        setPrevious(states[i]);
        setState(findState(states[i].next));
        break;
      }
    }
  };

  const change = (selectedValue: string) => {
    if (previous && currentState?.condition) {
      setState(findState(currentState?.condition?.(previous, selectedValue)));
    } else {
      nextState();
    }
  };

  return {
    nextState,
    data: currentState.value,
    change,
    state: currentState
  };
}

export default useStateMachine;