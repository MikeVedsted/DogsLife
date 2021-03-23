import CalendarNavigation from './CalendarNavigation'
import { CalendarNavigationProps } from '../../types'

const Header = ({ month, handleChange }: CalendarNavigationProps) => {
  const days: Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  return (
    <thead>
      <tr>
        {days.map((day: string) => (
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
