import { useState } from "react"
import classNames from "classnames"

interface Props {
  value: string
  onChange: (value: string) => void
  options: string[]
  placeholder: string
}

const Dropdown = ({ value, onChange, options, placeholder }: Props) => {
  const [optionsActive, setOptionsActive] = useState(false)
  return (
    <div className="relative">
      <div
        className="cursor-pointer placeholder-opacity-0 rounded border-theme-border border focus:placeholder-white transition p-3.5 text-xs text-left flex items-center"
        onClick={() => setOptionsActive(!optionsActive)}
      >
        {value ? (
          <span className="flex-1">{value}</span>
        ) : (
          <span className="text-color-alt flex-1">{placeholder}</span>
        )}
        <button
          className={classNames(
            " w-2 h-2 border-color-icon border-l-2 border-t-2 transform transition -rotate",
            {
              "rotate-45": !optionsActive,
              "-rotate-[135deg]": optionsActive,
            }
          )}
        ></button>
      </div>
      {optionsActive && (
        <div className="absolute bg-white rounded border-theme-border border left-0 top-[110%] w-full text-left px-3.5">
          <ul>
            {options.map((i) => (
              <li
                key={i}
                className="text-color-alt transition-colors hover:text-black cursor-pointer text-xs py-3.5 border-b border-theme-border last:border-b-0"
                onClick={() => {
                  onChange(i)
                  setOptionsActive(false)
                }}
              >
                {i}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Dropdown
