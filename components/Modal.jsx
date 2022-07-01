import React, { useState } from 'react'
import { data } from './../data';
import Cheese from './../Cheese';

function Modal() {
    const [name, setName] = useState('')
    const [people, setPeople] = useState(data)
    const [showModal, setShowModal] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name){
            setShowModal(true)
            setPeople([...people, {id:new Date().getTime().toString(), name}])
        }
        else{
            setShowModal(true)
        }
    }
    return (
        <div style={{textAlign: 'center'}}>
            {showModal && <Cheese/>}
            <form className='form' onSubmit={handleSubmit}>
                <div>
                    <input type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type='submit'>add</button>
            </form>
            {people.map((item) => {
               return(
                <div key={item.id}>
                     <h3>{item.name}</h3>
                </div>
               )
            })}
        </div>
    )
}

export default Modal