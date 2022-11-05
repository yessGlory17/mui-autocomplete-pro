import TextField  from "@mui/material/TextField";
import Autocomplete  from "@mui/material/Autocomplete";



const AutocompletePro = () => {
    return (
       <>
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={[1,2,3,4,5].map((n) => n.toString())}
        renderInput={(params) => <TextField {...params} />}
      />
      </>
    );
}


export default AutocompletePro;