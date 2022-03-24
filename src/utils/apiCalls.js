import fetch from 'isomorphic-fetch'
const API = 'http://localhost:4001/v1'

export const saveSecret = async (data,)=>{
    try {
        const response =  await fetch(`${API}/secrets`,{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                
            },
            body:JSON.stringify(data)
        })
        return response.json()
        
    } catch (error) {
        console.log(error)
    }
  
}
export const getSecret  = async (hash)=>{
    try {
        const response =  await fetch(`${API}/secrets/${hash}`,{
            method:'GET',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json',
                
            },
          
        })
        return response.json()
       
        
    } catch (error) {
        console.log(error)
    }
  
}