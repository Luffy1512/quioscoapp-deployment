import Image from "next/image"
import { useRouter } from "next/router"

const menu = [
    {
      id: 1,
      nombre: 'Pendientes',
      icono: 'pendiente',
      url: '/admin'
    },
    {
      id: 2,
      nombre: 'Completadas',
      icono: 'completa',
      url: '/admin/completas'
    },
    {
      id: 3,
      nombre: 'Caja',
      icono: 'caja',
      url: '/admin/caja'
    }
  ]

export default function MenuAdmin() {

    const router = useRouter()
    console.log(String(router.pathname));

  return (
    <>
        {menu.map ( enlace => (

            <div
                key={enlace.id}
                className={` ${enlace.url === router.pathname ? 'bg-amber-400' : ''} flex items-center w-full border p-5 hover:bg-amber-400`}
            >
                
                <Image
                    width={70}
                    height={70}
                    src={`/img/icono_${enlace.icono}.ico`}
                    alt={`Imagen icono ${enlace.nombre}`}
                    className="mr-5"
                />
                <button
                    type="button"
                    className="text-2xl font-bold hover:cursor-pointer uppercase"
                    onClick={() => {
                        router.push(enlace.url)
                    }}
                >
                    {enlace.nombre}
                </button>
            </div>
            ) )}

    </>
  )
}
