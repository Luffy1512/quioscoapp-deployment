import Head from "next/head"
import { ToastContainer } from 'react-toastify'
import Sidebar from "./sidebar"
import Pasos from "./pasos"
import Modal from "./modal"
import useCategorias from "@/hooks/useCategorias"

import "react-toastify/dist/ReactToastify.css";


export default function LayoutPrincipal({children, title = '', description = ''}) {

  const { modal, handleChangeModal, productoSeleccionado } = useCategorias()

    return (
      <>
          <Head>
              <title>{`QuioscoApp - ${title}`}</title>
              <meta name="description" content={description} />
          </Head>
          <div className="md:flex mt-2">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
                <Sidebar />
            </aside>
            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 p-10 h-screen overflow-y-scroll">
                <Pasos />
                {children}
            </main>
          </div>

          {modal && (
            <Modal 
              modal={modal}
              handleChangeModal={handleChangeModal}
              productoSeleccionado={productoSeleccionado}
            />
          )}

          <ToastContainer />
      </>
    )
  }
