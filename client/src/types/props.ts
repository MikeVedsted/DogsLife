export type CalendarBodyProps = {
  month: number
  handleClick: () => void
}

export type CalendarNavigationProps = {
  month: number
  handleChange: (month: number) => void
}