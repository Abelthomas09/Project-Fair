import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import IMG3 from '../assets/img3.webp'
import SEVER_BASE_URL from '../services/serverUrl';
import { updateUserAPI } from '../services/allAPI';

const Profile = () => {

  const [open, setOpen] = useState(false);
  const [preview, setPreview] = useState("")
  const [existingProfilePic, setExistingProfilePic] = useState("")
  //profile key of user Details is used to store uploaded user ProfilePic file
  const [userDetails, setUserDetails] = useState({
    username: "", email: "", password: "", github: "", linkedin: "", profilePic: ""
  })
  console.log(userDetails);
  //get existing userDetails from session storage and store it in the userDetails state
  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({
        ...userDetails, username: user.username, email: user.email, password: user.password, github: user.github, linkedin: user.linkedin
      })
      setExistingProfilePic(user.profilePic)
    }
  }, [open])

  //generate url for upload profile pic
  useEffect(() => {
    if (userDetails.profilePic) {
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  }, [userDetails.profilePic])

  const handleUserUpdate = async () => {
    // Get all user details
    const { username, email, password, github, linkedin, profilePic } = userDetails;
  
    if (github && linkedin) {
      // Prepare request body
      const reqBody = new FormData();
      reqBody.append("username", username);
      reqBody.append("email", email);
      reqBody.append("password", password);
      reqBody.append("github", github);
      reqBody.append("linkedin", linkedin);
      preview
        ? reqBody.append("profilePic", profilePic)
        : reqBody.append("profilePic", existingProfilePic);
  
      // Retrieve token from session storage
      const token = sessionStorage.getItem("token"); // Ensure token is stored in sessionStorage
  
      if (token) {
        // Prepare request header
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`,
        };
  
        try {
          // Make API call
          const result = await updateUserAPI(reqBody, reqHeader);
          if (result.status === 200) {
            alert("User Profile Updated Successfully!");
            // Update session storage with new user data
            sessionStorage.setItem("user", JSON.stringify(result.data));
            setOpen(!open); // Toggle open state
          }
        } catch (err) {
          console.error("Error updating user:", err);
        }
      } else {
        alert("Authorization token is missing. Please log in again.");
      }
    } else {
      alert("Please fill out the form completely.");
    }
  };
  

  return (
    <>
      <div className="d-flex justify-content-evenly">
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn btn-warning'><i className="fa-solid fa-chevron-down"></i></button>
      </div>
      <Collapse in={open}>
        <div className='row container-fluid align-items-center justify-content-center shadow p-2 rounded my-2' id="example-collapse-text">
          {/* upload profile picture */}
          <label className='text-center'>
            <input onChange={e => setUserDetails({ ...userDetails, profilePic: e.target.files[0] })} style={{ display: 'none' }} type="file" />
            {
              existingProfilePic == "" ?
                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : IMG3} alt="" />
                :
                <img width={'200px'} height={'200px'} className='rounded-circle' src={preview ? preview : `${SEVER_BASE_URL}/uploads/${existingProfilePic}`} alt="" />
            }
          </label>
          <div className="mb-2 w-100">
            <input value={userDetails.github} onChange={e => setUserDetails({ ...userDetails, github: e.target.value })} type="text" placeholder='User GITHIB link' className='form-control' />
          </div>
          <div className="mb-2 w-100">
            <input value={userDetails.linkedin} onChange={e => setUserDetails({ ...userDetails, linkedin: e.target.value })} type="text" placeholder='User LINKEDIN link' className='form-control' />
          </div>
          <div className="d-grid w-100">
            <button onClick={handleUserUpdate} className='btn btn-warning'>Update</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile