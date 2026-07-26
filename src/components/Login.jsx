'use client'
import PropTypes from 'prop-types'
import { useActionState } from 'react'

export function Login({ loginAction }) {
  const [state, formAction] = useActionState(loginAction, {})

  return (
    <form action={formAction}>
      <h2>Log In</h2>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username' required />
      </div>
      <br />
      <div>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password' required />
      </div>
      <br />
      <input type='submit' value='Log In' />
      {state.error ? <strong>Error Logging in: {state.error}</strong> : null}
    </form>
  )
}

Login.propTypes = { loginAction: PropTypes.func.isRequired }
