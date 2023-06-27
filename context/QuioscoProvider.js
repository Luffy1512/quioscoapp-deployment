import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { useRouter } from "next/router";

import useSWR from 'swr'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [productoSeleccionado, setProductoSeleccionado] = useState({})
    const [modal, setModal] = useState(false);
    const [pedido, setPedido] = useState([]);
    const [ total, setTotal ] = useState(0)
    const [ nombre, setNombre ] = useState('')

    // State para Administración
    const [ ordenes, setOrdenes ] = useState([])

    const router = useRouter()

    useEffect(() => {
        const calculoTotal = pedido.reduce( (total, producto) => total + (producto.cantidad * producto.precio), 0)
        setTotal(calculoTotal)
    }, [pedido])
    

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }

    useEffect(() => {
      obtenerCategorias()
    }, [])

    // useEffect para tener una categoria por default cuando cargue la pagina por primera vez
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])
    
    
    const handleClickCategoriaActual = (id) => {
        const categoria = categorias.filter( cat => cat.id === id)
        setCategoriaActual(categoria[0])
    }

    const handleClickProductoSeleccionado = (producto) => {
        // console.log(producto);
        setProductoSeleccionado(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }

    const handleClickPedido = ({categoriaId, ...producto}) => {
        if (pedido.some(productoState => productoState.id === producto.id)) {
            const pedidoActualizado = pedido.map( pedidoState => pedidoState.id === producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.info('Guardado Correctamente');
        } else {
            setPedido([...pedido, producto])
            toast.success('Agregado Correctamente');
        }
    }

    const handleClickActualizarProducto = id => {
        const productoActualizado = pedido.filter( pedido => pedido.id === id)
        setProductoSeleccionado(productoActualizado[0])
        
        setModal(!modal)
    }

    const handleClickEliminarProducto = id => {
        const pedidoActualizado = pedido.filter( pedido => pedido.id !== id)
        setPedido(pedidoActualizado)
        toast.warn('Eliminado Correctamente');
    }

    const handleConfirmarPedido = async (e) => {
        e.preventDefault()
        // console.log('enviando...');

        const pedidoConfirmado = {
            nombre,
            fecha: Date.now().toString(),
            total,
            pedido
        }

        try {
            const data = await axios.post('/api/ordenes', {
                ...pedidoConfirmado
            })
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        // console.log(pedidoConfirmado);

        // Reiniciar la APP
        toast.info('Pedido Confirmado');
        setNombre('')
        setPedido([])
        setTotal(0)
        setCategoriaActual(categorias[0])

        setTimeout(() => {
            router.push('/')
        }, 3000);
      }

    // Código de Administración
    const fetcher = async () => await axios('/api/ordenes').then(datos => datos.data)

    const { data, error, isLoading } = useSWR('/api/user', fetcher, {refreshInterval: 100})

    useEffect(() => {
        setOrdenes(data)
    }, [data])      
    
    return (
        <QuioscoContext.Provider
            value={{
                categorias,
                handleClickCategoriaActual,
                categoriaActual,
                handleClickProductoSeleccionado,
                handleChangeModal,
                modal,
                productoSeleccionado,
                handleClickPedido,
                pedido,
                handleClickActualizarProducto,
                handleClickEliminarProducto,
                total,
                nombre,
                setNombre,
                handleConfirmarPedido,
                ordenes
            }}
        >
            {children}
        </QuioscoContext.Provider>
    )
}

export {
    QuioscoProvider
}
export default QuioscoContext