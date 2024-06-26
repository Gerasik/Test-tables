import { ReactNode } from "react"
import classNames from "classnames"
import { ButtonType, ButtonSize, ButtonStyle } from "types/Button"

interface Props {
  children: ReactNode
  disabled?: boolean
  type?: ButtonType
  onClick?: () => void
  size?: ButtonSize
  className?: string
  style?: ButtonStyle
}

const Button = ({
  children,
  disabled = false,
  type = ButtonType.BUTTON,
  size = ButtonSize.REGULAR,
  className,
  onClick,
  style = ButtonStyle.PRIMARY,
}: Props) => {
  return (
    <button
      type={type}
      className={classNames(className, "text-xs", {
        "uppercase px-4 rounded bg-theme-button-primary font-bold text-white transition-colors":
          style === ButtonStyle.PRIMARY,
        "bg-theme-button-primary cursor-pointer hover:bg-theme-button-primary/70 active:bg-theme-button-primary/50":
          style === ButtonStyle.PRIMARY && !disabled,
        "bg-theme-button-primary-disabled":
          style === ButtonStyle.PRIMARY && disabled,
        "cursor-default pointer-events-none": disabled,
        "py-3.5": style === ButtonStyle.PRIMARY && size === ButtonSize.REGULAR,
        "py-1.5": style === ButtonStyle.PRIMARY && size === ButtonSize.SMALL,
        "bg-inherit hover:bg-transparent active:bg-transparent":
          style === ButtonStyle.EMPTY || style === ButtonStyle.UNDERLINE,
        underline: style === ButtonStyle.UNDERLINE,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
