import React, { useEffect, useState } from 'react'

function CleanUp() {
    const [size, setSize] = useState(window.innerWidth)

    const chechSize = () => {
        setSize(window.innerWidth)
    }


    useEffect(() => {
        window.addEventListener('resize', chechSize)
    }, [])
    
  return (
    <div style={{textAlign: 'center'}}>
        <h1>CleanUp</h1>
        <p>{size}</p>

    </div>
  )
}

export default CleanUp