import LayoutPrincipal from "@/components/layoutPrincipal"
import { formatearDinero } from "@/helpers"
import useCategorias from "@/hooks/useCategorias"
import { useEffect, useState } from "react"


export default function Total() {

  const [ disable, setDisable ] = useState(true)
  const { total, nombre, setNombre, handleConfirmarPedido } = useCategorias()
  // console.log(total);

  useEffect(() => {
    setDisable(true)
    if (nombre.length > 3 && total !== 0) {
      setDisable(false)
    }    
  }, [nombre, total, disable])

  return (
    <LayoutPrincipal
        title={`Total a Pagar`}
        description={'App para un Quiosco de Comida'}
    >
        <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
        <p className="text-2xl my-10">Confirma tu Pedido a Continuación</p>

        <form
          onSubmit={handleConfirmarPedido}
        >
          <div>
            <label
              htmlFor="nombre"
              className="block uppercase font-bold text-xl text-slate-800"
            >Nombre:</label>
            <input 
              id="nombre"
              type="text"
              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md text-xl"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <p className="mt-5 uppercase text-xl">Total a Pagar: <span className="font-bold text-xl">{formatearDinero(total)}</span></p>

          <input 
            className={`block mt-5 py-2 px-5 ${disable ? 'bg-slate-100' : 'bg-sky-700 hover:bg-sky-900 cursor-pointer' } rounded-md text-white uppercase font-bold text-xl text-center`}
            type="submit"
            value="Confirmar Pedido"
            disabled={disable}
          />
        </form>
    </LayoutPrincipal>
  )
}