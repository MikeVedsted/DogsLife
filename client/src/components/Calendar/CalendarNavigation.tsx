const CalendarNavigation = ({
  month,
  handleChange
}: {
  month: number
  handleChange: (month: number) => void
}) => {
  const date = new Date(new Date().getFullYear(), month)
  const displayMonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(
    date
  )

  return (
    <tr>
      <td colSpan={7} style={{ border: '1px solid white' }}>
        <div style={{ width: '100%', display: 'flex' }}>
          <button onClick={() => handleChange(month - 1)}>{'<'}</button>
          <p style={{ margin: '0 auto' }}>
            {displayMonth} {date.getFullYear()}
          </p>
          <button onClick={() => handleChange(month + 1)}>{'>'}</button>
        </div>
      </td>
    </tr>
  )
}

export default CalendarNavigation
