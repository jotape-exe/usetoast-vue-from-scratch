
export interface Toast {
  id: number
  message: string
  variant?: ToastVariant
  placement?: ToastPlacement
  duration?: number
  showCloseIcon?: boolean
}

export type ToastVariant =
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'surface'

export type ToastPlacement =
    | "toast-top toast-start"
    | "toast-top toast-center"
    | "toast-top toast-end"
    | "toast-middle toast-start"
    | "toast-middle toast-center"
    | "toast-middle toast-end"
    | "toast-bottom toast-start"
    | "toast-bottom toast-center"
    | "toast-bottom toast-end"