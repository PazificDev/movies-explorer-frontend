import { useState, useEffect } from "react";

const useValidation = (value, validators) => {

  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);
  const [isNameError, setIsNameError] = useState(false);
  const [inputValid, setInputValid] = useState(false);

  const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  const nameRegex = /^[А-ЯA-Z-]+$/umi;

  useEffect(() => {
    for (const validator in validators) {
      switch (validator) {
        case 'isEmpty':
          value ? setIsEmpty(false) : setIsEmpty(true);
          break;

        case 'isEmail':
          // eslint-disable-next-line
          const isEmail = emailRegex.test(value) ? setIsEmailError(false) : setIsEmailError(true);
          break;

        case 'isName':
          // eslint-disable-next-line
          const isName = nameRegex.test(value) ? setIsNameError(false) : setIsNameError(true);
          break;  
          
        case 'minLength':
          value.length < validators[validator] ? setMinLengthError(true) : setMinLengthError(false);
          break;  

        default: 
          break;
      }
    }
    // eslint-disable-next-line
  }, [value])

  useEffect(() => {
    if (isEmpty || isEmailError || isNameError || minLengthError) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }

  }, [isEmpty, isEmailError, isNameError, minLengthError])

  return {
    isEmpty,
    isEmailError,
    isNameError,
    minLengthError,
    inputValid,
  }
}

export default useValidation;