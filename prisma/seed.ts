import {categorias} from './data/categorias'
import {productos} from './data/productos'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    try {
        // lo que esta despues de prisma. es el modelo
        await prisma.categoria.createMany({
            data: categorias
        })
        await prisma.producto.createMany({
            data: productos
        })
    } catch (error) {
        console.log(error);
        
    }
}

main()