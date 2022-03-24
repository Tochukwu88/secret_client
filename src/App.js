import { useState } from "react";
import { saveSecret } from "./utils/apiCalls";



function App() {
  const client_url ='https://secret-client.vercel.app'
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')
  const [loading,setLoading] = useState(false)
  const [values, setValues] = useState({
    secret: "",

    ttl: "",
  });
  const {secret,ttl} = values
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      

      const payload = {
        secret,

        ttl,
      };
      const result = await saveSecret(payload);
      
      
if(result.statusCode===201){
  setError('')
  setSuccess(`secret can be accessed with this url: ${client_url}/${result.data.hash} and will expire at ${result.data.expires_after}`)

}else if(result.statusCode ===400){
  setSuccess('')
  setError(result.message)
}
      
    } catch (error) {
      
    }
  };
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
    setError('');
  };

  return (
    
   
<div className=" grid grid-cols-1 bg-gradient-to-r
    from-indigo-600
    to-blue-400 place-items-center h-screen ">


 
   
    <div className="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={handleSubmit}>
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
        
            <div>
              <label for="about" className="block text-sm font-medium text-gray-700"> Secret </label>
              <div className="mt-1">
                <textarea id="about" name="about" rows="3"  onChange={handleChange("secret")} value={secret} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder="enter your secret"></textarea>
              </div>
             
            </div>
            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label for="postal-code" className="block text-sm font-medium text-gray-700">expires after </label>
                <input type="text" name="postal-code" id="postal-code" autocomplete="postal-code" value={ttl} onChange={handleChange("ttl")} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>
              <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>
  <p>e.g 1D for 1 day 2D for 2days,1S for 1 sec, 1m for 1 minute,1M for 1 month,1Y for 1 year</p>
</div>
             {
               error?(<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              
               <span className="block sm:inline">{error}</span>
               <span  className="absolute top-0 bottom-0 right-0 px-4 py-3">
                 <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
               </span>
             </div>):null
             }
             {
               success?(<div class="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
               <p class="font-bold">success!</p>
               <p class="text-sm">{success}</p>
             </div>):null
             }



            
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
          </div>
        </div>
      </form>
    </div>
  
</div>









    
  );
}

export default App;
