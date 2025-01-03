import { categories } from "../data/categories";

export default function ExpenseForm() {
    return (
        <form action="" className="space-y-5">
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
                >
                    <option value="">-- Seleccione --</option>
                    {categories.map((category) => (
                        <option value={category.id} key={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <input type="submit" className="bg-blue-600 p-2 text-white uppercase font-bold cursor-pointer w-full" value="Agregar Gasto"/>
        </form>
    )
}
