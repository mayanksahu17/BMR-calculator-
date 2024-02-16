import { useState } from 'react'
import BMI from './component/BMI/BMI'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='bg-black h-[760px]   '>
      <h1 className=' text-white text-5xl ml-[550px]'><span className='mt-4'>BMR calculator</span> </h1>
    <div className='ml-[90px] bg-black mt-20'>
    <BMI  />
    </div>
    </div>

    <footer className='bg-black text-white'>all copyright reseved design and developed by <a href="https://portfolio-three-wheat-44.vercel.app/" className='text-blue-600'>Mayank sahu</a>  </footer>
    </>
  )
}

export default App
