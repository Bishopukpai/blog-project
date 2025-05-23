import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/page/login'
import Signup from './components/page/signup'

import Navbar from './components/navbar'
import BlogPost from './components/blog-posts'

function App() {

  return (
    <Routes>
      <Route index element={ 
        <>
          <Navbar />
          <BlogPost />
        </>
        }/>
        <Route path='/login' element={<Login />}/>  
        <Route path='/signup' element={<Signup />}/>
    </Routes>
    
  )
}

export default App