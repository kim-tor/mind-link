import React from 'react';

export default function Login() {
  return(
    <form>
      <label>
        <h3> Login</h3>
        <p>Username</p>
        <input type="text" />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}