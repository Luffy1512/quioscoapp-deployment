import Image from "next/image"
import useCategorias from "@/hooks/useCategorias";
import { useRouter } from "next/router";

export default function Sidebar() {

    const router = useRouter()

    const { 
        categorias, 
        handleClickCategoriaActual,
        categoriaActual } = useCategorias()
    // console.log(categorias);
    // console.log(categoriaActual);

  return (
    <>
        <Image 
            width={150}
            height={100}
            src={'/img/logo.svg'}
            alt="Imagen Logotipo"
            className="mx-auto"
        />

        <nav className="mt-10">
            {categorias.map( categoria => (
                <div 
                    key={categoria.id}
                    className={` ${categoriaActual?.id === categoria.id ? 'bg-amber-400' : ''} flex items-center w-full border p-5 hover:bg-amber-400`}
                >
                    <Image 
                        width={70}
                        height={70}
                        src={`img/icono_${categoria.icono}.svg`}
                        alt={`Imagen icono ${categoria.nombre}`}
                        className="mr-5"
                    />

                    <button
                        type="button"
                        className="text-2xl font-bold hover:cursor-pointer"
                        onClick={() => {
                            router.push('/')
                            handleClickCategoriaActual(categoria.id)
                        }}
                    >
                        {categoria.nombre}
                    </button>
                </div>
            ))}
        </nav>
    </>
  )
}
