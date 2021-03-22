import React, { useState } from 'react'
import Header from './Header'
import Body from './Body'
import CalendarNavigation from './CalendarNavigation'

const Calendar = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth())
  
  const handleChange = (month: number) => {
    setMonth(month)
  }

  return (
    <div style={{ maxWidth: '100vw', maxHeight: '100vh' }}>
      <table style={{ width: '700px' }}>
        <Header />
        <CalendarNavigation month={month} handleChange={handleChange} />
        <Body />
      </table>
    </div>
  )
}

export default Calendar
