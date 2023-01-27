import React, { useState } from 'react'
import './style.css'

function Tortburchak() {
  const [Hajm, setHajm] = useState()
  const [Bolak, setBolak] = useState()
  const [Eni, setEni] = useState()
  const [Boyi, setBoyi] = useState()
  const [Kichikoraliq, setKichikoraliq] = useState()
  const [BoyiBolaki, setBoyiBolaki] = useState()
  const [Bolaki, setBolaki] = useState()
  const [Bolaki1, setBolaki1] = useState()
  const [Balandligi, setBalandligi] = useState()
  const [Hisobla1, setHisobla1]=useState()
  // const [find,setfind]=useState(0)




  function raqam_probel_2(raqam){
    var temp='';
    for(var i=0;i<raqam.length;i++){
      if(i%2==0 && i!=0){
        temp=temp+' ';
      }
      temp=temp+raqam[i];
    }
    return temp;
  }
  
  
  function raqam_probel_1(raqam){
    var temp='';
    for(var i=0;i<raqam.length;i++){
       if(i!=0){
        temp=temp+' ,';
    }
        temp=temp+raqam[i];
      
    }
    return temp;
  }
function raqam_probel_2(raqam){
    var temp='';
    for(var i=0;i<raqam.length;i++){
      if(i%2==0 && i!=0){
        temp=temp+'  , ';
      }
      if (i%2==1){
          temp+='-';
      }
      temp=temp+raqam[i];
    }
    return temp;
  }


  function hajm() {
    //setHajm(findDivisors())
    setHajm(raqam_probel_1(findDivisors()))
    setBolak(raqam_probel_1(findDivisors1()))
    setHisobla1(raqam_probel_2(Hisobla()))
    setBolaki1((Eni*Boyi*Balandligi)/Bolaki)
  }
  var a=Eni
  function findDivisors(a=Eni) {
    var divisors = [];
    for(var i = 3; i <= 15; i++) {
      if(Eni % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  console.log(findDivisors(a=Eni));


var b;
  function findDivisors1(b=Boyi) {
    var divisors = [];
    for(var i = 3; i <= 15; i++) {
      if(Boyi % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }
  console.log(findDivisors(b=Boyi));





  let array1 = findDivisors();
   let array2 = findDivisors1();
   let h=Kichikoraliq;
   let c=BoyiBolaki;
  
  function Hisobla(array1 = findDivisors(), array2 = findDivisors1()) {
    const array3 = []
    for(let i = 0;i<array1.length+1;i++){
      for(let j=0;j<array2.length+1;j++){
        if(h<=array1[i]*array2[j] && c>=array1[i]*array2[j]){
          array3.push(array1[i])
          array3.push(array2[j])
        }
      }
    }
  
    return array3;
  }
   console.log( Hisobla(array1, array2));


  
  return (
    <div className='canteiner'>
      <div className="card1">
        <p>eni</p>
      <input onChange={event => setEni(event.target.value)} className='input' type="number" placeholder='eni'  id='car'/>
      <p>boyi</p>
      <input onChange={event => setBoyi(event.target.value)} className='input' type="number" placeholder='boyi' id='car'/>
        <div className="oraliq">
          <p>Nechta bo'lak kerak</p>
      <input onChange={event => setKichikoraliq(event.target.value)} className='input' type="number" placeholder='Kichikoraliq oraliq' id='car'/>
      <input onChange={event => setBoyiBolaki(event.target.value)} className='input' type="number" placeholder='Katta oraliq' id='car'/>
        </div>
      <h1 className='Hajm'>Enini eng maqbul variantli bolaklari </h1>
      <h1>   {Hajm}</h1>
      <h1>Boyini eng maqbul variantli bolaklari  </h1>
      <h1>{Bolak}</h1>
      <h1>Bolaklar oraliqidaki eng maqbul variant</h1>
      <h1>{Hisobla1}</h1>
      <p>nechta bolak</p>
      <input onChange={event => setBolaki(event.target.value)} className='input' type="number" placeholder='Bolak' id='car'/>
      <p>balandligi</p>
      <input onChange={event => setBalandligi(event.target.value)} className='input'type="number" placeholder='blandligi' id='car'/>
      <h1>Har bir bolakini hajmi = {Bolaki1} sm kub</h1>
      <div className="button">
      <button onClick={hajm}>start</button>
      <h1></h1>
      </div>
      </div>
    </div>
  )
}


// function raqam_probel_2(raqam){
//   var temp;
//   for(var i=0;i<raqam.length;i++){
//     if(i%2==0){
//       temp=temp+' ';
//     }
//     temp=temp+raqam[i];
//   }
//   return temp;
// }


// function raqam_probel_1(raqam){
//   var temp;
//   for(var i=0;i<raqam.length;i++){
//       temp=temp+' ';
//       temp=temp+raqam[i];
//   }
//   return (temp);
// }


// var t='1212'; findDivisors(); 
// console.log(raqam_probel_2(t));
// console.log(raqam_probel_1('1234567890'));

export default Tortburchak