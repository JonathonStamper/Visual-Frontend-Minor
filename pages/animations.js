import PopUpAnimation from '@/components/PopUp'
import React, { useState } from 'react'

export default function Animations() {
    const [isOpen, setIsOpen] = useState(false)
    const [data, setData] = useState({})

    const footbalEasterEgg = {
        title: 'Hello world',
        paragraph: 'Lorum ipsum ipsum lorem looooore'
    }
  return (
    <main className='flex items-center justify-center w-full h-screen '>
        <button onClick={() => setIsOpen(!isOpen)}>make appear</button>
        {isOpen &&
        <PopUpAnimation data={data} setIsOpen={setIsOpen}/>
}           
    </main>
  )
}
