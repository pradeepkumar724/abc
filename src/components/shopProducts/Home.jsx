import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>D MART</h1>
        <Link to="/control-panel">control panel</Link>
    </div>
  )
}

export default Home;