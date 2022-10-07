import React, { useState } from 'react'

function SignUp(props) {

    const [name, setName ] = useState("");

  return (
    <div className='signUp'>
        <form>
            <label>SignUp</label>
            <input placeholder={props.placeholder} onChange={e => props.setName(e.target.value)}/>
        </form>

    </div>
  )
}

export default SignUp;



<div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>