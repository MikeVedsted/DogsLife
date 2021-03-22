const Header = () => {
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
    </thead>
  )
}

export default Header
