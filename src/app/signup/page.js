import { Signup } from '@/components/Signup'
import { createUser } from '@/data/users'
import { initDatabase } from '@/db/init'
import { redirect } from 'next/navigation'

//este es un handler
async function signupAction(prevState, formData) {
  'use server'

  try {
    await initDatabase()
    await createUser({
      username: formData.get('username'),
      password: formData.get('password'),
    })
  } catch (err) {
    return { error: err.message }
  }

  redirect('/login')
}

export default function SignupPage() {
  return <Signup signupAction={signupAction} />
}
