import React, {useState} from 'react'
import './style.css'

function Aylana() {

  const [Balandlik, setBalandlik]= useState()
  const [Radius, setRadius]= useState()
  const [Hajim, setHajim]= useState(0)
  const [Bolak, setBolak]= useState(0)
  const [Bolaki, setBolaki]= useState(0)
  const [Bolaki1, setBolaki1]= useState(0)
  let a=3.14;
    function  hajm () {
          setHajim(Radius*Radius*3.14*Balandlik)
          setBolaki((360/ Bolak))
          setBolaki1((a*Radius*Radius*Balandlik)/(Bolak))
     }
  return (
    <div className='div'>
    
    <div className="card1">
      <p>Radiusi</p>
      <input  className='cardd' type="number" onChange={event=>setRadius(event.target.value)} placeholder='radiusi'  id='car'/>
      <p>Balandligi</p>
      <input  className='cardd' type="number" onChange={event =>setBalandlik(event.target.value)} placeholder='balandligi' id='car'/>
      <p>Nechta bo'lak</p>
      <input  className='cardd' type="number" onChange={event=>setBolak(event.target.value)} placeholder='Nechta bolak' id='car'/>
      <h1>Shirinlikning hajmi = {Hajim} sm</h1>
      <h1>Har bir bo'lakni   hami = {Bolaki1} sm kub</h1>
      <h1>Shirinlik kesilish gradusi = {Bolaki} '</h1>
      <div className="button">
      <button className='cardd' onClick={hajm}>start</button>
      </div>
    </div>




    </div>
  )
}

export default Aylana