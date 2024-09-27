import React from 'react'
import MotionTitle from './MotionTitle'
import Categories from './Categories'

const StickyHeader = ({selecetedCateg,setSelectedCateg}) => {
  return (
    <div className='sticky shadow p-2 bg-light'>
        <MotionTitle selectCateg={selecetedCateg} setSelectedCateg={setSelectedCateg}/>
        <Categories selectedCateg={selecetedCateg} setSelectedCateg={setSelectedCateg}/>
    </div>
  )
}

export default StickyHeader