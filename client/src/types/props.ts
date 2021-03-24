export type CalendarBodyProps = {
  month: number
  handleClick: () => void
}

export type CalendarNavigationProps = {
  month: number
  handleChange: (month: number) => void
}

export type CalendarDateCellProps = {
  value: number
  handleClick: () => void
}

export type ModalProps = {
  handleClose: () => void
  children: any
}

export type ProtectedRouteProps = {
  component?: any
  exact?: boolean
  path: string
  children?: any
}
