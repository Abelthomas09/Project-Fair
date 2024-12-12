import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import IMG1 from '../assets/img1.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { homeProjectAPI } from '../services/allAPI'

const Home = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(false)
  const [homeProjects, setHomeProjects] = useState([])

  console.log(homeProjects);


  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [])

  const getHomeProjects = async () => {
    try {
      const result = await homeProjectAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }

    } catch (err) {
      console.log(err);
    }
  }

  const handleNavigateToProject = ()=>{
    //user is logined?
    if(sessionStorage.getItem("token")){
      navigate('/projects')
    }else{
      //not an authorised user then alert please login
      alert("Please login to get full access to our project Collection!!!") 
    }
  }

  return (
    <>
      {/* Landing */}
      <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: '80px' }}><i className="fa-brands fa-docker"></i>Project Fair</h1>
              <p className='img-fluid' style={{ textAlign: 'justify' }}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!</p>
              {
                isLogin ?
                  <Link to={'/dashboard'} className="btn btn-warning">Manage Your Projects</Link>
                  :
                  <Link to={'/login'} className="btn btn-warning">Starts To Explore</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='ms-5' src={IMG1} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Explore Our Projects */}
      <div className="my-5 text-center">
        <h1 className="mb-5">Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
            {
              homeProjects?.map(project => (
                <div className="me-5">
                  <ProjectCard displayData={project} />
                </div>
              ))
            }
          </div>
        </marquee>
        <button onClick={handleNavigateToProject} className='btn btn-link mt-5'>CLICK HERE TO VIEW MORE PROJECTS!!!</button>
      </div>
      {/* Our Testimionals */}
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimionals</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          {/* Card */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/female-profile-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-avatar-portraits-pack-people-illustrations-6590631.png?f=webp" alt="" />
                <div className='d-flex justify-content-center my-2'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Card */}
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdni.iconscout.com/illustration/premium/preview/woman-profile-illustration-download-in-svg-png-gif-file-formats--young-female-girl-avatar-portraits-pack-people-illustrations-6590622.png?f=webp&h=700" alt="" />
                <div className='d-flex justify-content-center my-2'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Text className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/female-profile-illustration-download-in-svg-png-gif-file-formats--young-woman-girl-avatar-portraits-pack-people-illustrations-6590623.png" alt="" />
                <div className='d-flex justify-content-center my-2'>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                </div>
                <p style={{ textAlign: 'justify' }}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Home