import { categories } from "../data/categories";
import type { DraftExpense } from "../types";
import { useState } from "react";
import DatePicker from 'react-date-picker';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';

export default function ExpenseForm() {

    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    })

    return (
        <form action="" className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">Nuevo Gasto</legend>
            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Nombre Gasto:
                </label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Agrega el nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                    value={expense.expenseName}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Cantidad:
                </label>
                <input
                    type="number"
                    id="amount"
                    placeholder="Añade cantidad del gasto"
                    className="bg-slate-100 p-2"
                    name="amount"
                    value={expense.amount}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Categoria:
                </label>
                <select
                    name="category"
                    id="category"
                    className="bg-slate-100 p-2"
                    value={expense.category}
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map((category) => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Fecha Gasto:
                </label>
                <DatePicker
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                />
            </div>
            <input type="submit" className="bg-blue-600 p-2 text-white uppercase font-bold cursor-pointer w-full" value="Agregar Gasto" />
        </form>
    )
}
