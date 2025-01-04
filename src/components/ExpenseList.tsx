import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
  const { state } = useBudget()
  const isEmpty = useMemo(() => state.expenses.length === 0, [state.expenses])
  return (
    <div>
      {isEmpty ? <p className="text-2xl font-bold text-gray-600">No hay gastos</p> : (
        <>
          <p className="text-2xl font-bold text-gray-600">Listado de Gastos</p>
          {state.expenses.map((expense) => (
            <ExpenseDetail
              key={expense.id}
              expense={expense}
            />
          ))}
        </>
      )}
    </div>
  )
}
