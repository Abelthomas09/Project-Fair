import commonAPI from "./commonAPI";
import SEVER_BASE_URL from "./serverUrl";

//register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SEVER_BASE_URL}/register`,reqBody)
}

//login
export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SEVER_BASE_URL}/login`,reqBody)
}

//add-project
export const addProjectAPI = async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SEVER_BASE_URL}/add-project`,reqBody,reqHeader)
}

//home-project
export const homeProjectAPI = async ()=>{
    return await commonAPI("GET",`${SEVER_BASE_URL}/home-projects`,{})
}

//user-project
export const userProjectAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${SEVER_BASE_URL}/user-projects`,{},reqHeader)
}

//all-project
export const allProjectAPI = async (reqHeader,searchKey) => {
    //query parameters of url: ?search=${searchKey} and query stored in 'search'
    return await commonAPI("GET", `${SEVER_BASE_URL}/all-projects?search=${searchKey}`, {}, reqHeader);
};
  
//projects/:id/edit
export const updatedProjectAPI = async (id,reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SEVER_BASE_URL}/projects/${id}/edit`, reqBody, reqHeader); 
}

//projects/:id/delete
export const deleteProjectAPI = async (id,reqHeader) => {
    return await commonAPI("DELETE", `${SEVER_BASE_URL}/projects/${id}/remove`, {}, reqHeader); 
}

//edit user-put
export const updateUserAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT", `${SEVER_BASE_URL}/user/edit`, reqBody, reqHeader); 
}