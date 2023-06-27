import Orden from "@/components/orden"

export default function Pendientes({ordenPendiente}) {

  // console.log(ordenPendiente);

  return (
    <>
      {ordenPendiente && ordenPendiente.length ? ordenPendiente.map(orden => (
          <Orden 
            key={orden.id}
            orden={orden}
          />
        )) : <p>No hay ordenes pendientes</p> }
    </>
  )
}
