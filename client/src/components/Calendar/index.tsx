import Header from './Header'
import Cells from './Cells'

const Calendar = () => {
  return (
    <div style={{ maxWidth: '100vw', maxHeight: '100vh' }}>
      <table style={{ width: '700px' }}>
        <Header />
        <Cells />
      </table>
    </div>
  )
}

export default Calendar
