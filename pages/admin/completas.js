import AdminLayout from "@/components/adminLayout"
import useCategorias from '@/hooks/useCategorias'
import Image from "next/image"
import { formatearDinero } from "@/helpers"


export default function Completas() {

  const { ordenes } = useCategorias()
  const ordenCompleta = ordenes.filter( orden => orden.estado !== false)

  return (
    <AdminLayout
      pagina='Administración - Pedidos Completos'
    >
      <h1 className="text-2xl md:text-4xl font-black">Panel de Administración</h1>
      <p className="text-xl md:text-2xl my-5">Resumen de los pedidos Completados:</p>

      {ordenCompleta && ordenCompleta.length && ordenCompleta.map( orden => (
        <div key={orden.id} className="border p-10 space-y-5">
          <h3 className="text-xl md:text-2xl font-bold">Orden: {orden.id}</h3>
          <p className="text-base md:text-lg font-bold">Cliente: {orden.nombre}</p>

          <div>
              {orden.pedido.map(pedido => (
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
              <p className="my-5 font-black text-2xl md:text-4xl text-amber-500">
                  Total a pagar: {formatearDinero(orden.total)}
              </p>
          </div>
        </div>
      ))}
    </AdminLayout>
  )
}
