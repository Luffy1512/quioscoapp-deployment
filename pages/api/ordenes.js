import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
  // req - hace referencia al servidor
  // res - es la respuesta que le damos a la API
  const prisma = new PrismaClient()

  if (req.method === 'POST') {
    // console.log(req.body);
    // res.json({ metodo: "POST!!!"} );

    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        fecha: req.body.fecha,
        pedido: req.body.pedido
      }
    })
    // res.status(200).json(orden)
  } 

  // Obtener Ordenes
  // const ordenes = await prisma.orden.findMany({
  //   where: {
  //     estado: false
  //   }
  // })
  const ordenes = await prisma.orden.findMany()
  res.status(200).json(ordenes)
}
