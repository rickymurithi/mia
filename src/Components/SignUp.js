import React, { useState } from 'react';
import Form from './Form';
import "./sign.css";

function SignUp() {

    const [values, setValues ] = useState({
      username: "",
      email: "",
      birthday: "",
      password: "",
      confirmPassword: ","
    });
    
    const inputs = [
      {
        id: 1,
        name: "username",
        text: "text",
        placeholder: "username",
        errorMessage: "Username should have 4-15 characters and include atleast special character.",
        label: "username",
        pattern: `[A-Za-z\d!@#$%^&*()_+]{4,15}`,
        required: true
      },{
        id: 2,
        name: "email",
        text: "email",
        placeholder: "email",
        errorMessage: "Valid email address",
        label: "username",
        required: true
      },
      {
        id: 3,
        name: "birthday",
        text: "date",
        placeholder: "birthday",
        label: "birthday"
      },
      {
        id: 4,
        name: "password",
        text: "text",
        placeholder: "password",
        errorMessage: "Password 8-20 character and include at least 1 letter, 1 number",
        label: "password",
        pattern: `[A-Za-z\d!@#$%^&*()_+]{8,20}`,
        required: true
      },
      {
        id: 5,
        name: "confirmPassword",
        text: "password",
        placeholder: "Confirm Password",
        errorMessage: "Password doesn't match",
        label: "confirmPassword",
        pattern: values.password,
        required: true
      }
    ];

    const handleSubmit = (e) => {
      e.preventDefault();
    };

    const onChange = (e) => {
      setValues({...values, [e.target.name]: e.target.value});
    };

  return (
    <div className='signUp'>
      <h1>SignUp</h1>
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <Form key={input.id} 
            {...input} 
            value={values[input.name]}
            onChange={onChange} />
          ))}
            
            <button>Submit</button>
        </form>

    </div>
  )
}

export default SignUp;
