import React from 'react'
import qr from '../qr-code-component-main/images/image-qr-code.png'

const Qr = () => (
    <div className='bg-white w-[220px] p-3 rounded-xl'>
        <div className='flex justify-center items-center bg-[hsl(218, 44%, 22%)]'>
            <img src={qr} alt="" className='w-[200px] h-[200px] rounded-md'/>
        </div>
        <div className='flex flex-col items-center justify-between'>
            <h1 className='text-center mt-4 font-display font-bold'>improve your front-end <br />
             skills by building projects</h1>
            <p className='text-[15px] text-center font-display font-normal'>
                Scan the QR code to visit Frontend
                Menter and taje your coding skills
                to next level
            </p>
        </div>
    </div>
  )

export default Qr