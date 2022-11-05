import TextField  from "@mui/material/TextField";
import Autocomplete  from "@mui/material/Autocomplete";
import { useState } from "react";
import { Field, useStateMachine, useStateMachineProps } from "../hooks";

export type AutocompleteProProps = {
  states: useStateMachineProps;
  //change?:(selectedValue: string) => void;
}

const AutocompletePro = ({states }: AutocompleteProProps) => {
    const { data, nextState, change } = useStateMachine(states);
    const [fullValue, setValue] = useState<string>("");
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
          //change?.(value);
          nextState();
        }}
        options={data ? data.map((item) => item.value) : []}
        renderInput={(params) => <TextField {...params} />}
      />
    );
}


export default AutocompletePro;