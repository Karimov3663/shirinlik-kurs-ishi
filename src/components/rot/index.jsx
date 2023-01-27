import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Aylana from '../aylana';
import Tortburchak from '../tortburchak';
import Home from '../home';
import './style.css'
function Rot() {
  return (
    <div>

    <div className='Canteiner'>
           <h1>
           <Link className='home' to={'/'}>Shirinlik shaklini tanlang</Link>
            </h1> 
     <div className="link">
             <Link className='text' to={'aylana'}>Aylana</Link>
             <Link className='text' to={'tortburchak'}>Tortburchak</Link>
      </div>

    </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aylana' element={<Aylana/>}/>
          <Route path='/tortburchak' element={<Tortburchak/>}/>
       </Routes>
    </div>
  )
}

export default Rot