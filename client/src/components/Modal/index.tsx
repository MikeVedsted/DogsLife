const Modal = ({ handleClose, children }: { handleClose: () => void; children: any }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999
      }}
    >
      <div
        style={{
          width: '60vw',
          maxHeight: '75vh',
          overflowY: 'scroll',
          backgroundColor: 'white',
          opacity: 1,
          borderRadius: '10px',
          margin: 'auto'
        }}
      >
        <button onClick={handleClose}>X</button>
        {children}
      </div>
    </div>
  )
}

export default Modal
