import CalendarNavigation from './CalendarNavigation'

const Header = ({ month, handleChange }: { month: number; handleChange: (month: number) => void }) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <thead>
      <tr>
        {days.map((day) => (
          <th style={{ width: '100px' }} key={day}>
            {day}
          </th>
        ))}
      </tr>
      <CalendarNavigation month={month} handleChange={handleChange} />
    </thead>
  )
}

export default Header
