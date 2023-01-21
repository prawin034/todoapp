import { useState } from 'react';

const UseHooks = (data) => {
  const [enteredvalue, setenteredvalue] = useState('');
  const [enteredvalueTouched, setenteredvalueTouched] = useState(false);
  const enteredvalueIsValid = data(enteredvalue);
  const enteredvalueInvalid = !enteredvalueIsValid && enteredvalueTouched;
  const valueNameHandler = (event) => {
    setenteredvalue(event.target.value);
  };

  const blur = () => {
    setenteredvalueTouched(true);
  };

  const globalreset = () => {
    setenteredvalue('');
    setenteredvalueTouched(false);
  };

  return {
    value: enteredvalue,
    isvalid: enteredvalueIsValid,
    invalid: enteredvalueInvalid,
    valueNameHandler,
    blur,
    globalreset,
  };
};

export default UseHooks;
