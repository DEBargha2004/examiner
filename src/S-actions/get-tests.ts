import { ExamStatus } from '@/types/exam'
import { auth } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

export default async function getTests ({ status }: { status: ExamStatus }) {
  const { userId } = auth()
  if (!userId) return []

  const prisma = new PrismaClient()
  try {
    const tests = await prisma.exam.findMany({
      where: {
        u_id: userId,
        e_status: status
      }
    })

    return tests
  } catch (error) {
    console.log(error)
    return []
  } finally {
    prisma.$disconnect()
  }
}
