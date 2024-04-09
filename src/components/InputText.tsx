import { forwardRef } from "react"

interface Props {
  placeholder: string
  value: string | number
  onChange: (newValue: string) => void
  type?: "text" | "number"
  min?: number
  max?: number
}

const InputText = forwardRef<HTMLInputElement, Props>(
  ({ value, placeholder, onChange, type = "text", min, max }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border-theme-border border focus:placeholder-white transition p-3.5 text-xs placeholder-color-alt"
        min={min}
        max={max}
      />
    )
  }
)

export default InputText
