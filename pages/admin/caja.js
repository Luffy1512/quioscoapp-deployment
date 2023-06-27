import AdminLayout from "@/components/adminLayout"

export default function Caja() {
  return (
    <AdminLayout
      pagina='Administración - Caja'
    >
      <h1 className="text-2xl md:text-4xl font-black">Panel de Administración</h1>
      <p className="text-xl md:text-2xl my-5">Caja:</p>

      <input 
        type="date"
      />
    </AdminLayout>
  )
}