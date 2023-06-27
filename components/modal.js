import ReactModal from "react-modal"
import Image from "next/image";
import { formatearDinero } from "@/helpers";
import { useState, useEffect } from "react";
import useCategorias from "@/hooks/useCategorias";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// En el caso de Vite el id principal donde se inserta todo el contenido es #root. En el caso de Next es #__next
ReactModal.setAppElement('#__next');

export default function Modal({productoSeleccionado, handleChangeModal, modal}) {

  // console.log(productoSeleccionado);
  const { imagen, nombre, precio } = productoSeleccionado

  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  const { handleClickPedido, pedido } = useCategorias()

  useEffect(() => {
    if (pedido.some( pedidoState => pedidoState.id === productoSeleccionado.id )) {
      setEdicion(true);
      const pedidoActualizado = pedido.find( pedidoState => pedidoState.id === productoSeleccionado.id );
      // console.log(pedidoActualizado);
      setCantidad(pedidoActualizado.cantidad);
  }
  }, [pedido])
  
  
  return (
    <>
      <ReactModal
        isOpen={modal}
        onRequestClose={handleChangeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex gap-2 relative">
          <div className="md:w-1/3">
            <Image 
                width={200}
                height={200}
                src={`/img/${imagen}.jpg`}
                alt={`Imagen ${nombre}`}
            />
          </div>
          <div className="p-5 md:w-2/3">
              <h3 className="text-2xl font-bold">{nombre}</h3>
              <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
              <div className="mt-5 flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    if (cantidad > 1 ) {      setCantidad(cantidad - 1)
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
                <p className="text-2xl font-bold">{cantidad}</p>
                <button
                  type="button"
                  onClick={() => {
                    if (cantidad < 10) {
                      setCantidad(cantidad + 1);
                    }
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <button
                className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
                type="button"
                onClick={() => {
                  handleClickPedido({...productoSeleccionado, cantidad})
                  handleChangeModal()
                }}
              >{edicion ? 'Guardar Cambios' : 'Agregar al Pedido'}</button>
          </div>
        </div>
        <button 
          className=" absolute top-3 right-3 text-xl bg-amber-500 hover:bg-amber-700 text-white font-bold py-1 px-3 rounded-full"
          onClick={handleChangeModal}
        >X</button>
      </ReactModal>
    </>
  )
}
