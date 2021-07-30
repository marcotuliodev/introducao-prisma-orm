import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// CONSULTAS
async function main() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

// async function main() {
//   const allUsers = await prisma.user.findMany({
//     include: { posts: true },
//   })
//   // use `console.dir` to print nested objects
//   console.dir(allUsers, { depth: null })
// }


// Escrevendo no Banco de Dados
// async function main() {
//   const post = await prisma.post.create({
//     data: {
//       title: 'Prisma makes databases easy',
//       author: {
//         connect: { email: 'sarah@prisma.io' },
//       },
//     },
//   })
//   console.log(post)

//   const allUsers = await prisma.user.findMany({
//     include: { posts: true },
//   })
//   console.dir(allUsers, { depth: null })
// }


// Atualizando o Banco de Dados 
// async function main() {
//   const post = await prisma.post.update({
//     where: { id: 2 },
//     data: { published: true },
//   })
//   console.log(post)
// }

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
