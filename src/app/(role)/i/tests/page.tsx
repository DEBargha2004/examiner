import getTests from '@/S-actions/get-tests'
import React from 'react'

export default async function Page () {
  const tests = await getTests({ status: 'ONGOING' })

  return <p>{JSON.stringify(tests, null, 2)}</p>
}
