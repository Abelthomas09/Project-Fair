import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{marginTop:'100px'}} className='w-100 shadow p-1'>
      <div className='mt-5 container rounded'>
        <div className="d-flex justify-content-between">
          {/* indro */}
          <div style={{width:'400px'}}>
            <h5><i className="fa-brands fa-docker me-2"></i>Project Fair</h5>
            <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* links */}
          <div className="d-flex flex-column">
            <h5>Links</h5>
            <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Home</Link>
            <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
            <Link to={'/register'} style={{textDecoration:'none',color:'white'}}>Register</Link>
          </div>
          {/* guides */}
          <div className="d-flex flex-column">
            <h5>Guides</h5>
            <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React</a>
            <a style={{textDecoration:'none',color:'white'}} href="https://reactrouter.com/en/main" target='_blank'>React Router</a>
            <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.github.io/" target='_blank'>React bootsrap</a>
          </div>
          {/* contacts */}
          <div className="d-flex flex-column">
            <h5>Contact</h5>
            <div className="d-flex">
              <input placeholder='Enter Your Mail!!' type="text" className='form-control me-2'/>
              <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="d-flex justify-content-between mt-3">
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-whatsapp"></i></a>
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-facebook"></i></a>
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-discord"></i></a>
              <a style={{textDecoration:'none',color:'white'}} target='_blank' href=""><i className="fa-brands fa-reddit"></i></a>
            </div>
          </div>
        </div>
        <p className='text-center mt-3'>Copyright &copy; july 2024 Batch, Project Fair App. Build with React</p>
      </div>
    </div>
  )
}

export default Footer