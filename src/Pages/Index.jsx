import React from 'react'

const Index = () => {
  return (
    <div>
        <div className='h-[250px] w-[400px] border border-black p-4 bg-yellow-600'>
            <div>
                <p>Palanchowk Bhagwati Enterprises</p>
            </div>
            <div className='flex flex-row justify-between items-center'>
                <div className='h-20 w-20 overflow-hidden'>
                    <img className='h-20 w-20 object-cover' src="https://cdn.pixabay.com/photo/2024/02/08/14/52/ai-generated-8561243_640.jpg" alt="ganesh" />
                </div>
                <div className='h-20 w-20 overflow-hidden'>
                    <img className='h-20 w-20 object-cover rounded-3xl' src="https://cdn.pixabay.com/photo/2024/02/08/14/52/ai-generated-8561243_640.jpg" alt="ganesh" />
                </div>
            </div>
            <div className='flex flex-row justify-between items-center '>
                <p>9999</p><p>8888</p><p>7777</p><p>6666</p>
            </div>
            <div>
                <p>other contents</p>
            </div>

        </div>
    </div>
  )
}

export default Index