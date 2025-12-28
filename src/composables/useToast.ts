import { readonly, ref } from 'vue'
import type { Toast, ToastPlacement, ToastVariant } from '../components/toast/toast.interface'

const DEFAULT_DURATION = 3000
const DEFAULT_PLACEMENT: ToastPlacement = "toast-bottom toast-end"

const toasts = ref<Toast[]>([])
let idCounter = 0

export const useToast = () => {

  const show = (options: {
    message: string
    variant?: ToastVariant
    duration?: number,
    placement?: ToastPlacement
    showCloseIcon?: boolean
  }) => {

    const id = idCounter++

    const toast: Toast = {
      id,
      message: options.message,
      variant: options.variant ?? 'surface',
      duration: options.duration ?? DEFAULT_DURATION,
      placement: options.placement ?? DEFAULT_PLACEMENT,
      showCloseIcon: options.showCloseIcon ?? true,
    }

    toasts.value.push(toast)

    if (options.duration !== 0) {
      setTimeout(() => remove(id), options.duration ?? DEFAULT_DURATION)
    }
  }

  const remove = (id: number) => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }

  return {
    toasts: readonly(toasts),
    show,
    remove,
    surface: (message: string, options?: any) => show({ message, variant: "surface", ...options }),
    info: (message: string, options?: any) => show({ message, variant: "info", ...options }),
    success: (message: string, options?: any) => show({ message, variant: "success", ...options }),
    warning: (message: string, options?: any) => show({ message, variant: "warning", ...options }),
    error: (message: string, options?: any) => show({ message, variant: "error", ...options }),
  }
}
