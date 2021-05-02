import React from 'react'
import HomePage from "./pages/home"

function Welcome() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default React.memo(Welcome)