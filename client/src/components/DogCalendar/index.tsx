const DogCalendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const Header = () => {
    return (
      <thead>
        <tr>
          {days.map((day) => (
            <th>{day}</th>
          ))}
        </tr>
      </thead>
    )
  }

  return (
    <div style={{ maxWidth: '100vw', maxHeight: '100vh' }}>
      <table>
        <Header />
        <tbody>
          <tr>
            <td>asd</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DogCalendar
