import React, { useEffect, useState } from 'react'

function Counter() {
  const [value, setValue] = useState(0)

    useEffect(() => {
      if(value >=1){
        document.title = `new message ( ${value} )`
      }
    }, [value])

  const complex = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState +1;
      })

    },2000)
  }
  return (
    <div style={{margin: '4rem 0',textAlign:'center'}}>
        <section >
          <h2>regular counter</h2>
          <h1>{value}</h1>
          <button onClick={() => setValue(value - 1)} className='btn'>decrease</button>
          <button onClick={() => setValue(0)} className='btn'>reset</button>
          <button onClick={() => setValue(value + 1)} className='btn'>increase</button>
        </section>

        <section>
          <h2>More Complex counter</h2>
          <h1>{value}</h1>
          <button onClick={complex} className='btn'>decrease</button>
        </section>
    </div>
  )
}

export default Counter