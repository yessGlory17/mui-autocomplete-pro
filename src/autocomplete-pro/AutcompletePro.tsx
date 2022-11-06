import TextField  from "@mui/material/TextField";
import Autocomplete  from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { Field, useStateMachine, useStateMachineProps } from "../hooks";

export type AutocompleteProProps = {
  states: useStateMachineProps;
  onChange?: (value: string) => void;
}

const AutocompletePro = ({states, onChange, ...params }: AutocompleteProProps) => {
    const { data, nextState, change, reset, state, updateSelected} = useStateMachine(states);
    const [fullValue, setValue] = useState<string>("");

    useEffect(()=>{
      if(fullValue === ''){
        reset();
      }
    },[fullValue])

    const options = (): Field[] => {
      if(typeof data === 'function'){
        return data();
      }
      return data;
    }

    return (
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        disableClearable
        value={fullValue}
        onInputChange={(
          event: React.SyntheticEvent<Element, Event>,
          value: string
        ) => {
          //changeCondition(value);
          //nextState();
          onChange?.(`${fullValue} ${value}`)
        }}
        onChange={(event, value) => {
          setValue(`${fullValue} ${value}`);
          onChange?.(`${fullValue} ${value}`)
          updateSelected(value);
          if(state.onSelectedCondition){
            change?.(value);
          }else{
            nextState();
          }
        }}
        options={options().map((item) => item.value) ?? []}
        renderInput={(params) => <TextField {...params} />}
        {...params}
      />
    );
}


export default AutocompletePro;