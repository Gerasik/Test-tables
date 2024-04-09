import { ReactNode } from "react"

interface Props {
  fieldError?: string
  children: ReactNode
}

const FieldContainer = ({ fieldError, children }: Props) => {
  return (
    <div className="flex flex-col items-stretch">
      {children}
      {fieldError && (
        <span className="text-red-500 text-xs text-left">{fieldError}</span>
      )}
    </div>
  )
}

export default FieldContainer
