import React, {useEffect,useState} from 'react'
import {data} from '../data'

const Menus = ({selectedCateg}) => {

    const [menus,setMenus]=useState(null)
    useEffect(()=>{
        setMenus(selectedCateg=='all' ? data: data.filter(obj=>obj.category==selectedCateg))
    },[selectedCateg])

    menus && console.log(menus);
    

  return (
    <div className='border row egesz'>
      {menus && menus.map(obj=>
        <div key={obj.id} className="col-lg-4 col-md-6 col-sm-12">
          <div className='itemek'>
            <div className="row">
              <h5 className='col-8'>{obj.title}</h5>
              <div className='col-4'>Price:{obj.price}</div>
            </div>
            <div className="row">
              <img className='kep img-tumbnail img-fluid col-6' src={'images/'+obj.img} alt={obj.title} />
              <div className='col-6'>{obj.desc}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Menus
