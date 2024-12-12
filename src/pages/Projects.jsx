import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectAPI } from '../services/allAPI'

const Projects = () => {
  const [allProjects,setAllprojects] = useState([])
  const [SearchKey,setSearchKey] = useState("")
  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[SearchKey])
  
  const getAllProjects = async()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await allProjectAPI(reqHeader,SearchKey);
        console.log(result);
        if(result.status==200){
          setAllprojects(result.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    <>
    <Header/>
    <div className="container-fluid">
      <div className='d-flex justify-content-between align-items-center py-5'>
      <h1>All Projects</h1>
      <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Projects by their Language' className='form-control w-25'/>
      </div>
      <Row>
        { 
        allProjects.length>0?
        allProjects?.map(project=>(
          <Col key={project?._id} className='mb-3' sm={12} md={6} lg={4}>
          <ProjectCard displayData={project}/>
          </Col>
        ))
          :
          <div className="fw bolder text-danger">Project not found</div>
        }
      </Row>
    </div>
    </>
  )
}

export default Projects