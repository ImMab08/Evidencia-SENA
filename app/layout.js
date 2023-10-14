import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './Components/Footer'
import Section from './Components/Section'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Industrias Franky',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} body background-image`} >
        <Section />
        <main>
          {children}
        </main>
        <Footer />
      </body> 
    </html>
  )
}