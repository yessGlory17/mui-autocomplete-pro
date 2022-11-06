import { useContext, useEffect, useState } from "react";
import { AutocompleteProContext } from "../../context";
import { Field, State, ValueFunction } from "./types";

export type useStateMachineProps = {
    init: number;
    states: State[];
}

type DataGetter = () => Field[];

interface ReturnUseStateMachine {
  nextState: () => void;
  data: Field[] | DataGetter;
  change: (selectedValue: string) => void;
  state: State;
  reset: () => void;
}

const useStateMachine = ({init, states}: useStateMachineProps): ReturnUseStateMachine => {
  const [currentState, setState] = useState<State>(states[init ?? 0]); //init state
  const [previous, setPrevious] = useState<State | null>(null);

  const autocompleteContext = useContext(AutocompleteProContext);

  useEffect(() => {
    console.log(`Current State: `, currentState);
    console.log(`Previous State: `, previous);
  }, [currentState, setState, previous, setPrevious]);

  useEffect(()=> {
    autocompleteContext?.updateProviderState(currentState);
  },[currentState, setState])

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
    if (previous && currentState?.onSelectedCondition) {
      setState(findState(currentState?.onSelectedCondition?.(previous, selectedValue)));
    } else {
      nextState();
    }
  };

  const reset = () => {
    setState(states[0]);
    setPrevious(null);
  }

  const data = (): Field[] => {
    if(typeof currentState.value === 'function'){
      return currentState.value(previous, currentState);
    }
    return currentState.value;
  }

  return {
    nextState,
    data,
    change,
    state: currentState,
    reset
  };
}

export default useStateMachine;