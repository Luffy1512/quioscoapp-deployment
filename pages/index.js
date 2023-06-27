import LayoutPrincipal from "@/components/layoutPrincipal";
import useCategorias from "@/hooks/useCategorias";
import ListadoProductos from "@/components/listadoProductos";

export default function Home() {

  const { categoriaActual } = useCategorias()

  return (
    <>
      <LayoutPrincipal
        title={`Menu ${categoriaActual?.nombre}`}
        description={'App para un Quiosco de Comida'}
      >
        <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
        <p className="text-2xl mt-5">Elíge y personaliza tu pedido a continuación:</p>

        <ListadoProductos productos={categoriaActual?.productos} />

      </LayoutPrincipal>
    </>
  )
}
