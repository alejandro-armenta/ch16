import { Navigation } from '@/components/Navigation'
import { getUserInfoByToken } from '@/data/users'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Full-Stack Next.js Blog',
  description: 'A blog about React and Next.js',
}

//esta no se llama siempre y la otra si!
//cuando se llama a esta se llama a la otra para renderizar el body!
async function logoutAction() {
  'use server'
  const cookieStore = await cookies()
  cookieStore.delete('AUTH_TOKEN')
}

export default async function RootLayout({ children }) {
  const cookieStore = await cookies()

  const token = cookieStore.get('AUTH_TOKEN')

  const user = await getUserInfoByToken(token?.value)

  return (
    <html lang='en'>
      {/* se inyecta el header aqui */}
      <body>
        <nav>
          <Navigation username={user?.username} logoutAction={logoutAction} />
        </nav>
        <br />
        <main>{children}</main>
      </body>
    </html>
  )
}
