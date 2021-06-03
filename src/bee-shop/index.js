import React from 'react'
import HomePage from "./includes/pages/home/index"

function Welcome() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default React.memo(Welcome)