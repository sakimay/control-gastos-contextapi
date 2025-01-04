import { PropsWithChildren } from "react"

export default function ErrorMessage({children} : PropsWithChildren) {
  return (
    <p className="bg-red-600 text-white text-center text-sm font-bold p-2">{children}</p>
  )
}
