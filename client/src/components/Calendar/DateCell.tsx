import { CalendarDateCellProps } from '../../types'

const DateCell = ({ value, handleClick }: CalendarDateCellProps) => {
  return (
    <td
      style={{
        backgroundColor: 'white',
        color: '#282c34',
        opacity: 0.3,
        fontWeight: 600
      }}
      onClick={handleClick}
    >
      {value}
    </td>
  )
}

export default DateCell
