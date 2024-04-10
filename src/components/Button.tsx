import { ReactNode } from "react"
import classNames from "classnames"

interface Props {
  children: ReactNode
  disabled?: boolean
  type?: HTMLButtonElement["type"]
  onClick: () => void
}

const Button = ({
  children,
  disabled = false,
  type = "button",
  onClick,
}: Props) => {
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
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
