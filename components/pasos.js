import { useRouter } from "next/router"

const pasos = [
    {paso: 1, nombre: 'Menú', url: '/'},
    {paso: 2, nombre: 'Resumen', url: '/resumen'},
    {paso: 3, nombre: 'Datos y Total', url: '/total'}
]

export default function Pasos() {

    const router = useRouter()
    // console.log(router);

  return (
    <>
        <div className="flex justify-between mt-5 mb-1">
            {pasos.map( paso => (
                <button
                    className=" text-xl md:text-2xl font-bold" 
                    key={paso.paso}
                    onClick={() => {
                        router.push(paso.url)
                    }}
                >{paso.nombre}</button>
            ))}
        </div>
        <div className="mb-3 bg-slate-200 w-full h-4 rounded-lg">
            <div className={`bg-amber-300 h-4 ${router.pathname === '/' ? 'w-10' : router.pathname === '/resumen' ? 'w-1/2' : 'w-full'} rounded-lg`}></div>
        </div>
    </>
  )
}
