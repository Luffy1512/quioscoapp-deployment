import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
   const prisma = new PrismaClient();
   
   if (req.method === 'POST') {
    console.log('Actualizando');
    // req.query - recuperamos lo que pasamos por la url, y vemos que se guarda en id que seria el nombre que le pusimos para el routing dinamico [id].js
    console.log(req.query);

    const ordenActualizada = await prisma.orden.update({
        where: {
            id: parseInt(req.query.id)
        },
        data: {
            estado: true
        }
    })

    res.status(200).json(ordenActualizada)  
   }
}
