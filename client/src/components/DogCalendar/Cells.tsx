const Cells = () => {
  const now = new Date()
  const daysInCurrentMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate()
  const firstDayInCurrentMonth = now.getDay()
  const initialPadding =
    firstDayInCurrentMonth === 0 ? 7 : firstDayInCurrentMonth
  
  let cells = []

  for (let i = 1; i < initialPadding; i++) {
    cells.push(<td style={{ border: '1px solid white' }}>-</td>)
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    cells.push(<td style={{ border: '1px solid white' }}>{i}</td>)
  }

  return <tbody>{cells}</tbody>
}

export default Cells
