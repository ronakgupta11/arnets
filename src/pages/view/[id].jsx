import React from 'react'

import { useRouter } from 'next/router'
function View() {
    const route = useRouter()
    console.log(route.query.id)
  return (
    <div>{route.query.id}</div>
  )
}

export default View