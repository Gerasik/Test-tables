import { ReactNode } from "react"
import classNames from "classnames"
import Button from "./Button"
import CloseIcon from "assets/close.svg?react"
import { ButtonStyle } from "types/Button"

interface Props {
  children: ReactNode
  onCloseModal: () => void
  active: boolean
  label?: string
}

const ModalContainer = ({ children, onCloseModal, active, label }: Props) => {
  return (
    <div
      className={classNames(
        "bg-black/35 fixed top-0 left-0 w-screen h-screen flex items-center justify-center transition-opacity duration-300",
        {
          "opacity-100": active,
          "opacity-0 pointer-events-none": !active,
        }
      )}
    >
      <div className="bg-white h-auto flex flex-col items-stretch w-3/5 max-w-64 tablet:max-w-64">
        <div className="flex items-center justify-between px-4 mt-4">
          <span>{label}</span>
          <Button
            className="fill-theme-red ease-in-out transition-transform hover:rotate-90 hover:scale-125 active:scale-75 disabled:fill-theme-button-primary-disabled self-end"
            style={ButtonStyle.EMPTY}
            onClick={onCloseModal}
          >
            <CloseIcon />
          </Button>
        </div>

        <div className="self-center w-full">{children}</div>
      </div>
    </div>
  )
}

export default ModalContainer
