'use client'
import PropTypes from 'prop-types'
import { useActionState } from 'react'

export function Signup({ signupAction }) {
  const [state, formAction] = useActionState(signupAction, {})

  return (
    <form action={formAction}>
      <h2>Sign up</h2>
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
      <input type='submit' value='Sign Up' />
      {state.error ? <strong>Error signing up: {state.error}</strong> : null}
    </form>
  )
}

Signup.propTypes = { signupAction: PropTypes.func.isRequired }
