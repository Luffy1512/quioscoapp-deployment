import Productos from "./productos"

export default function ListadoProductos({productos}) {
    // console.log(productos);
  return (
    <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {productos?.map( producto => (
            <Productos 
                key={producto.id}
                producto={producto}
            />
        ))}
    </div>
  )
}
