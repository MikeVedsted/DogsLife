import DateCell from './DateCell'
import PaddingCell from './PaddingCell'

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
  let rows = []

  for (let i = 1; i < initialPadding; i++) {
    cells.push(<PaddingCell />)
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    cells.push(<DateCell value={i}  />)
  }

  for (let i = 0; i < cells.length; i = i + 7) {
    rows.push(
      <tr style={{ height: '100px' }}>
        {cells[i]}
        {cells[i + 1] ? cells[i + 1] : <PaddingCell />}
        {cells[i + 2] ? cells[i + 2] : <PaddingCell />}
        {cells[i + 3] ? cells[i + 3] : <PaddingCell />}
        {cells[i + 4] ? cells[i + 4] : <PaddingCell />}
        {cells[i + 5] ? cells[i + 5] : <PaddingCell />}
        {cells[i + 6] ? cells[i + 6] : <PaddingCell />}
      </tr>
    )
  }

  return <tbody>{rows}</tbody>
}

export default Cells
