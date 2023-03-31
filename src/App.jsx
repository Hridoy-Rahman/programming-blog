import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

function App() {
  return (
    <div className="">
      <Header></Header>
      <Blogs></Blogs>
      <div className='container mx-auto p-8 flex flex-col lg:flex-row gap-2'>
        <div className='text-center p-4 bg-green-300 rounded-lg mb-4'>
          <h1 className='text-3xl font-bold'>State</h1>
          <p className='text-xl font-semibold'>State is a feature of React that store the data of a component.It helps the developer to create a dynamic webpage. Changing of state of a component ,the component will render again.</p>
          <h1 className='text-3xl font-bold'>Props</h1>
          <p className='text-xl font-semibold'>Props is a feature of React. By using it we can pass data from parent component to it's child component. Using it data can passes to the multiple component.</p>
        </div>
        <div className='text-center p-4 bg-green-300 rounded-lg mb-4'>
          <h1 className='text-3xl font-bold'>useState</h1>
          <p className='text-xl font-semibold'>
            useState is a React Hook that returns a state variable  and a setter function. State variable holds the component's data.
          </p>
        </div>
        <div className='text-center p-4 bg-green-300 rounded-lg mb-4'>
          <h1 className='text-3xl font-bold'>useEffect</h1>
          <p className='text-xl font-semibold'>
          The first argument of the useEffect function is the effect function, which is a callback function typically used to run a side-effect. The second argument is the dependencies array, which is an optional parameter and is usually used to iterate through if the side-effect is appropriate.
          </p>
        </div>
        
        <div className='text-center p-4 bg-green-300 rounded-lg mb-4'>
        <h1 className='text-3xl font-bold'>React functionality</h1>
          <p className='text-xl font-semibold'>
          React works on Virtual DOM. When we create a component in React, a virtual DOM is created for that component. Any changes to that component are then immediately displayed on our screen.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
