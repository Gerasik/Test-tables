import { useRef } from "react"
import tablesStore, { IData } from "store/data"

const Form = () => {
  const refName = useRef<HTMLInputElement>(null)
  const refSurname = useRef<HTMLInputElement>(null)
  const refAge = useRef<HTMLInputElement>(null)
  const refCity = useRef<HTMLInputElement>(null)

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (
      refName.current &&
      refSurname.current &&
      refAge.current &&
      refCity.current
    ) {
      e.preventDefault()
      const newRowData: IData = {
        id: new Date().valueOf(),
        name: refName.current.value,
        surname: refSurname.current.value,
        age: +refAge.current.value,
        city: refCity.current.value,
      }
      tablesStore.addRow(newRowData)
      refName.current.value = ""
      refSurname.current.value = ""
      refAge.current.value = ""
      refCity.current.value = ""
    }
  }

  return (
    <div className="rounded bg-white shadow px-4 py-5 max-w-72">
      <form className="flex flex-col" onSubmit={onFormSubmit}>
        <input type="text" required ref={refName} />
        <input type="text" required ref={refSurname} />
        <input type="text" required ref={refAge} />
        <input type="text" required ref={refCity} />
        <button type="submit">create</button> <br />
      </form>
    </div>
  )
}

export default Form
