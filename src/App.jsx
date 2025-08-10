import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [edittext, setEditText] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (edittext !== null) {
      const updated = [...data]
      updated[edittext] = { name, email }
      setData(updated)
      setEditText(null)
    }
    else {
      setData([...data, { name, email }])
    }
    setName('')
    setEmail('')
  }
  const handleEdit = (index) => {
setName (data[index].name) 
setEmail (data[index].email)
setEditText(index)
  }
  const handleDelete=(index)=>{
setData(data.filter((_, i)=>i!==index))
  }
  return (
    <>
    <h1>sab dummy</h1>
 <div className="">        
 <h1 className='border mb-2 font-bold text-3xl bg-amber-600 text-white rounded-lg '>Fomr Table</h1>
        {/* <//fomr section</> */}
        <form onSubmit={handleSubmit}
          className='border mb-10 bg-amber-200 rounded-lg '>
          <input type="text" placeholder='Name' className='border px-4 py-2 mt-4 hover:bg-white'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="text" placeholder='Email' className='border px-4 py-2 mt-4 ml-4  hover:bg-white'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <button className='bg-blue-400 text-white px-7 py-2 mt-10 mb-5 font-bold'>{edittext!==null? "update":"Add"}</button>
        </form>
        {/* <//table section</> */}
        <table className='border w-full rounded-lg'>
          <thead >
            <tr>
              <td className='border px-5 py-2 font-bold text-2xl  bg-gray-300'>Name</td>
              <td className='border px-5 py-2 font-bold text-2xl  bg-gray-300'>Email</td>
              <td className='border px-5 py-2 font-bold text-2xl   bg-gray-300'>Status</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='border'>{item.name}</td>
                <td className='border'>{item.email}</td>
                <td className='border'>
                  <button onClick={() => handleEdit(index)} className='bg-green-500 px-3 py-1 mt-2 mb-2 rounded font-bold mr-4'>Edit</button>
                  <button onClick={()=>handleDelete(index)} className='bg-red-500 px-3 py-1 mt-2 mb-2 rounded font-bold mr-4'>Delete</button>
                </td>
              </tr>
            ))

            }
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
