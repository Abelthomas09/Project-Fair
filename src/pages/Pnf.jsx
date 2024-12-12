import React from 'react'
import { Link } from 'react-router-dom'

const Pnf = () => {
  return (
    <div style={{height:'550px'}} className='my-5 d-flex justify-content-center align-items-center flex-column'>
      <h1 style={{fontSize:'80px'}}>404!</h1>
      <img className='img-fluid' width={"600px"} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h1>Look Like Your Lost</h1>
      <p>The page you are looking for is not avaiable!!</p>
      <Link to={'/'} className='btn btn-warning'>Go To Home</Link>
    </div>
  )
}

export default Pnf