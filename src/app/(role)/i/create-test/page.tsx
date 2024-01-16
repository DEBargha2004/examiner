import { auth } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

export default async function Page () {
  const { userId } = auth()
  const prisma = new PrismaClient()

  if (!userId) return null
  const result = await prisma.exam.findMany({
    where: {
      u_id: userId
    }
  })

  console.log(result)

  return <p>{JSON.stringify(result, null, 2)}</p>
}
