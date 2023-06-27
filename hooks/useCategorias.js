import { useContext } from 'react'
import QuioscoContext from '@/context/QuioscoProvider'

const useCategorias = () => {
    return useContext(QuioscoContext)
}

export default useCategorias