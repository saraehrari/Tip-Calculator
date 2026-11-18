import { useState } from "react"








function App(){


  const[bill, setBill] = useState(0);
  const[tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);






return(
  <div>
    <input
     type="text"
     value={bill}
     onChange={()=>{
      setBill()

     }}
     
     
     />
  </div>
)}
export default App;