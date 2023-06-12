// import Link from 'next/link'
import './globals.css'
import { rubik } from './fonts'
import ComponenteH from '@/components/header'
import dynamic from 'next/dynamic'
import { CalendarComponent, MiniCalendarComponent } from '@/components/MiniCcalendar'
import HeaderComponent from '@/components/Header'
import Tags from '@/components/Tags'
import Calendar from '@/components/Calendar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>

        <HeaderComponent />

        <main>
          <MiniCalendarComponent />

          <Tags />

          <Calendar />

          {children}
        </main>
      </body>
    </html>
  )
}
