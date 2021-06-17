import axios from 'axios'


async function MakeApiCall(){
   const value=await axios.get('http://localhost:5000/notes')
    .then(res=>{
        return res.data
    })

  return value
   
}

export default  MakeApiCall;




