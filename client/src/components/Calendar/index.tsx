import React, { useState } from 'react'

import Header from './Header'
import Modal from '../Modal'
import Body from './Body'

const Calendar = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth())
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleChange = (month: number) => {
    setMonth(month)
  }

  return (
    <div style={{ maxWidth: '100vw', maxHeight: '100vh', overflow: 'hidden' }}>
      {showModal && (
        <Modal handleClose={() => setShowModal(false)}>
          <p>MODAL CONTENT!</p>
        </Modal>
      )}
      <table style={{ width: '700px' }}>
        <Header month={month} handleChange={handleChange}  />
        <Body month={month} handleClick={() => setShowModal(true)} />
      </table>
    </div>
  )
}

export default Calendar
