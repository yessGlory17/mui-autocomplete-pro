import TextField  from "@mui/material/TextField";
import Autocomplete  from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
import { Field, useStateMachine, useStateMachineProps } from "../hooks";

export type AutocompleteProProps = {
  states: useStateMachineProps;
  onChange?: (value: string) => void;
  //change?:(selectedValue: string) => void;
}

const AutocompletePro = ({states, onChange }: AutocompleteProProps) => {
    const { data, nextState, change, reset} = useStateMachine(states);
    const [fullValue, setValue] = useState<string>("");

    useEffect(()=>{
      if(fullValue === ''){
        reset();
      }
    },[fullValue])

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
        }}
        onChange={(event, value) => {
          setValue(`${fullValue} ${value}`);
          onChange?.(`${fullValue} ${value}`)
          //change?.(value);
          nextState();
        }}
        options={data ? data.map((item) => item.value) : []}
        renderInput={(params) => <TextField {...params} />}
      />
    );
}


export default AutocompletePro;