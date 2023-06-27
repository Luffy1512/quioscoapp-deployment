import LayoutPrincipal from "@/components/layoutPrincipal"
import ListadoPedido from "@/components/listadoPedido";
import useCategorias from "@/hooks/useCategorias"

export default function Resumen() {

  const { pedido } = useCategorias()
  // console.log(pedido);

  return (
    <LayoutPrincipal
        title={`Resumen del Pedido`}
        description={'App para un Quiosco de Comida'}
    >
        <h1 className="text-4xl font-black">Resumen</h1>
        <p className="text-2xl my-10">Revisa tu Pedido</p>
        {pedido.length === 0 ? (
          <p className="text-center text-2xl">No hay elementos en tu pedido</p>
        ) : (
          pedido.map( pedido => (
            <ListadoPedido 
              key={pedido.id}
              pedido={pedido} 
            />
          ))
        )}
    </LayoutPrincipal>
  )
}
