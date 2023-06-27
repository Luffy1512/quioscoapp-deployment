import axios from "axios";
import Image from "next/image";
import { toast } from 'react-toastify'

export default function Orden({orden}) {
    // console.log(orden);
    const { id, nombre, pedido } = orden

    const confirmarOrden = async () => {
        // console.log('Confirmarndo orden... ', id);
        try {
            const data = await axios.post(`/api/ordenes/${id}`)
            // console.log(data);
            toast.success('Orden Completada')
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className="border p-10 space-y-5">
        <h3 className="text-xl md:text-2xl font-bold">Orden: {id}</h3>
        <p className="text-base md:text-lg font-bold">Cliente: {nombre}</p>

        <div>
            {pedido.map(pedido => (
                <div key={pedido.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                    <div className="w-32">
                        <Image
                            width={400}
                            height={500}
                            alt={`Imagen ${pedido.nombre}`}
                            src={`/img/${pedido.imagen}.jpg`}
                        />
                    </div>

                    <div className="p-5 space-y-5">
                        <h4 className="text-lg md:text-xl font-bold text-amber-500">{pedido.nombre}</h4>
                        <p className="text-base md:text-lg font-bold">Cantidad: {pedido.cantidad}</p>
                    </div>
                </div>
            ))}
        </div>

        <div className="md:flex md:items-center md:justify-between my-0">
            <button
                type="button"
                className=" bg-sky-600 uppercase font-bold text-xl md:text-2xl text-white hover:bg-sky-800 py-2 px-7 rounded transition-all "
                onClick={confirmarOrden}
            >
                Completar Orden
            </button>
        </div>
    </div>
  )
}
