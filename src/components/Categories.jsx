import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { allCateg } from '../utils'

const Categories = ({selectedCateg,setSelectedCateg}) => {
    

  return (
    <div className='d-flex justify-content-center'>
        <ListGroup horizontal>
            {allCateg().map(item => <ListGroupItem 
            className="valami"
            key={item}
             onClick={()=>setSelectedCateg(item)}>
              {item}</ListGroupItem>)}
        </ListGroup>
    </div>
  )
}

export default Categories
