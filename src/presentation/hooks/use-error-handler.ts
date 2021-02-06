import { useLogout } from '@/presentation/hooks'
import { AccessDeniedError } from '@/domain/errors'

type CallBackType = (error: Error) => void
type ResultType = CallBackType

export const UseErrorhandler = (callback: CallBackType): ResultType => {
  const logout = useLogout()
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      logout()
    } else {
      callback(error)
    }
  }
}
