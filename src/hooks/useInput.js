import { useState } from "react";
import useValidation from "./useValidation";



const useInput = (initial, validators) => {
  const [value, setValue] = useState(initial);
  const [isDirty, setIsDirty] = useState(false)
  const valid = useValidation(value, validators)

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true)
  }

  return {
    value, 
    onChange,
    onBlur,  
    isDirty,
    ...valid
  };
};

export default useInput;