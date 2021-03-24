import DateCell from './DateCell'
import PaddingCell from './PaddingCell'
import { CalendarBodyProps } from '../../types'

const Body = ({ month, handleClick }: CalendarBodyProps) => {
  const now: Date = new Date(new Date().getFullYear(), month)
  const daysInCurrentMonth: number = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate()
  const firstDayInCurrentMonth: number = now.getDay()
  const initialPadding: number = firstDayInCurrentMonth === 0 ? 7 : firstDayInCurrentMonth

  let cells: Array<JSX.Element> = []
  let rows: Array<JSX.Element> = []

  for (let i = 1; i < initialPadding; i++) {
    cells.push(<PaddingCell key={`paddingCell-${i}`} />)
  }

  for (let i = 1; i <= daysInCurrentMonth; i++) {
    cells.push(<DateCell key={`${month}-dateCell-${i}`} value={i} handleClick={handleClick} />)
  }

  for (let i = 0; i < cells.length; i = i + 7) {
    rows.push(
      <tr key={`${month}-row-${i}`} style={{ height: '100px' }}>
        {cells[i]}
        {cells[i + 1] ? cells[i + 1] : <PaddingCell key={`paddingCell-end-${i + 1}`} />}
        {cells[i + 2] ? cells[i + 2] : <PaddingCell key={`paddingCell-end-${i + 2}`} />}
        {cells[i + 3] ? cells[i + 3] : <PaddingCell key={`paddingCell-end-${i + 3}`} />}
        {cells[i + 4] ? cells[i + 4] : <PaddingCell key={`paddingCell-end-${i + 4}`} />}
        {cells[i + 5] ? cells[i + 5] : <PaddingCell key={`paddingCell-end-${i + 5}`} />}
        {cells[i + 6] ? cells[i + 6] : <PaddingCell key={`paddingCell-end-${i + 6}`} />}
      </tr>
    )
  }

  return <tbody>{rows}</tbody>
}

export default Body
