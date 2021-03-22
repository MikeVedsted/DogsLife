const DateCell = ({ value }: { value: number }) => {
  return (
    <td
      style={{
        backgroundColor: 'white',
        color: '#282c34',
        opacity: 0.3,
        fontWeight: 600
      }}
    >
      {value}
    </td>
  )
}

export default DateCell
