import React, {useState} from 'react';
import "./form.css";

 export default function Form(props) {
    const [focused, setFocused] = useState(false);

    const {label, errorMessage, onChange, id, ...inputProps} = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

  return (
    <div className='form'>
        <label>SignUp</label>
        <input {...inputProps} 
        onChange={onChange} 
        onBlur={handleFocus} 
        focused={focused.toString()}
        onFocus={() => inputProps.name==="confirmPassword" && setFocused(true)} />
        <span>{errorMessage}</span>
    </div>
  )
}



