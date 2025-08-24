import React from 'react'

function Header() {
  return (
    <div className='flex flex-col md:flex-row'>
        <div className='w-full md:w-[30%] h-[420px] bg-lightGreen border border-black'>
            Block 1
        </div>
        <div className='w-full md:w-[70%] h-[420px] bg-darkGreen border border-black px-10 text-center md:text-left'>
            <h1 className='font-tai text-5xl font-semibold mt-14 py-4'>RIYA GUPTA</h1>
            <h3 className='font-tai text-xl'>B.E. COMPUTER ENGINEERING</h3>
            <h3 className='font-tai text-xl'>AUGUST 2023 - 2027</h3>
            <p className='font-myFont py-10 w-[90%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum aut quidem assumenda quisquam perferendis tenetur quo? Iste cum iusto, provident aliquid et suscipit nihil ad, modi repudiandae exercitationem adipisci quisquam.</p>
        </div>
    </div>
  )
}

export default Header