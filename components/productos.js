import Image from "next/image"
import { formatearDinero } from "@/helpers"
import useCategorias from "@/hooks/useCategorias"

export default function Productos({producto}) {

    // console.log(producto);
    const { nombre, imagen, precio } = producto

    const { handleClickProductoSeleccionado, handleChangeModal } = useCategorias()

  return (
    <div className="border">
        <Image 
            width={400}
            height={400}
            src={`/img/${imagen}.jpg`}
            alt={`Imagen ${nombre}`}
        />
        <div className="p-5">
            <h3 className="text-2xl font-bold">{nombre}</h3>
            <div>
              <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>

              <button
                type="button"
                className="bg-indigo-500 hover:bg-indigo-700 w-full p-3 uppercase font-bold text-white mt-5 text-xl"
                onClick={() => {
                  handleClickProductoSeleccionado(producto)
                  handleChangeModal()
                }}
              >Agregar</button>
            </div>
        </div>

        
    </div>
  )
}
