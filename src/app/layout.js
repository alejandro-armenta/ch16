export const metadata = {
  title: 'Full-Stack Next.js Blog',
  description: 'A blog about React and Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      {/* se inyecta el header aqui */}
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
