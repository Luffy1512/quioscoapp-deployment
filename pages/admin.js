import AdminLayout from "@/components/adminLayout"
import Pendientes from './admin/pendientes'
import useCategorias from '@/hooks/useCategorias'

export default function Admin() {
  
  const { ordenes } = useCategorias()
  const ordenPendiente = ordenes?.filter( orden => orden.estado !== true)
  // console.log(ordenes);
  // console.log(ordenPendiente);


  return (
    <>
      <AdminLayout
          pagina='Administración - Pedidos Pendientes'
      >
        <h1 className="text-2xl md:text-4xl font-black">Panel de Administración</h1>
        <p className="text-xl md:text-2xl my-5">Administra tus ordenes a continuación:</p>

        <Pendientes 
          ordenPendiente={ordenPendiente}
        />
          
      </AdminLayout>
    </>
  )
}
