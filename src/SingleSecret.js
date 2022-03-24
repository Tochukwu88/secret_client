import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getSecret } from "./utils/apiCalls";





export default function SingleSecret() {
  const [error,setError] = useState('')
  const [secret,setSecret] = useState('')
  const [loading,setLoading] = useState(false)
  const {hash} = useParams()
 
  const getSecretWithHash = async (hash)=>{
    setLoading(true)
    const result = await getSecret(hash)
    
    if(result.statusCode ===200){
      setLoading(false)
setSecret(result.data)
    }else if(result.statusCode == 404){
      setLoading(false)
      setError(result.message)
    }
        }
      
    useEffect(()=>{
      getSecretWithHash(hash)
    },[hash])
      
  return (<>
  
  {loading?(<div>Loading...</div>):(<div className="h-screen bg-gradient-to-r
  from-indigo-600

  to-blue-400 py-16 px-16 ">
  {error?(<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    
    <p className="text-gray-700 text-base  break-words mb-4">
      {error}
    </p>
    <Link className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/'>Share a secret</Link>
  </div>
</div>):(<div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">My Secret</h5>
    <p className="text-gray-700 text-base  break-words mb-4">
     {secret}
    </p>
    <Link className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" to='/'>Share a secret</Link>
    
  </div>
</div>)}
   
 
</div> )}
  </>

   

  )
}
