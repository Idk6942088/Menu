import { useState } from 'react';
import './App.css'
import Menus from './components/Menus'
import StickyHeader from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const[selectCateg,setSelectedCateg]=useState('all')
  return (
    <div className='shadow'>
      <StickyHeader selectedCateg={selectCateg} setSelectedCateg={setSelectedCateg}/>
      <Menus selectedCateg={selectCateg}/>
    </div>
  )
}

export default App
