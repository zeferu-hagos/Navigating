import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {
  return (
    <>
    <div>
      <input type='search' placeholder='Search Products' />
      </div>
      <nav>
        <Link to="featured" style={{paddingLeft:"100px"}}>Featured</Link>
        <Link to="new" style={{paddingLeft:"1000px"}}>New</Link>
      </nav>
      <Outlet/>
    </>
  
  )
}

