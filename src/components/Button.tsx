import { ReactNode } from "react"
import classNames from "classnames"

interface Props {
  children: ReactNode
  disabled: boolean
  type?: HTMLButtonElement["type"]
}

const Button = ({ children, disabled, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={classNames(
        "uppercase text-xs py-3.5 bg-theme-button-primaryfont-bold text-white transition-colors",
        {
          "bg-theme-button-primary cursor-pointer hover:bg-theme-button-primary/70 active:bg-theme-button-primary/50":
            !disabled,
          "bg-theme-button-primary-disabled cursor-default pointer-events-none":
            disabled,
        }
      )}
    >
      {children}
    </button>
  )
}

export default Button
