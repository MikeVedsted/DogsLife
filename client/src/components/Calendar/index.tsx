import Header from './Header'
import Body from './Body'

const Calendar = () => {
  return (
    <div style={{ maxWidth: '100vw', maxHeight: '100vh' }}>
      <table style={{ width: '700px' }}>
        <Header />
        <Body />
      </table>
    </div>
  )
}

export default Calendar
