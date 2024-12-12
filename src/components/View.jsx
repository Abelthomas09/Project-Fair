import React, { useContext, useEffect,useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, userProjectAPI } from '../services/allAPI'
import { addProjectContext, editProjectContext } from '../contexts/ContextShare'

const View = () => {
  const { editProjectResponse, setEditProjectResponse } = useContext(editProjectContext)
  const {addProjectResponse,setAddProjectResponse} = useContext(addProjectContext)
  const [userProjects,setUserProjects] = useState([])
  console.log(userProjects);
  useEffect(()=>{
    getUserProjects()
  },[addProjectResponse,editProjectResponse])

  const getUserProjects = async ()=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await userProjectAPI(reqHeader)
        console.log(result);
        if(result.status==200){
          setUserProjects(result.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  const removeProject = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await deleteProjectAPI(id,reqHeader)
        if(result.status==200){
          getUserProjects()
        }
      }catch(err){
        console.log(err);
      }
    }
  }


  return (
    <>
    <div className="d-flex justify-content-between mt-3">
      <h2 className="text-warning">All Projects</h2>
      <div><Add/></div>
    </div>
    <div className="mt-2">
     { 
     userProjects.length>0 ?
      userProjects?.map(project=>(
        <div key={project?._id} className='border rounded p-2 d-flex justify-content-between mb-3'>
        <h3>{project.title}</h3>
        <div className="d-flex align-items-center">
          <div><Edit project={project}/></div>
          <button className='btn'><a href={project.github} target='_blank'><i className="fa-brands fa-github"></i></a></button>
          <button onClick={()=>removeProject(project?._id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
      </div>
      ))
      :
      <div className="fw-bolder fs-3">You haven't uploaded any project yet... Add your Projects</div>
      }
    </div>
    </>
  )
}

export default View