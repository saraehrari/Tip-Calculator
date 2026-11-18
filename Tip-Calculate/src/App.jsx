import { useState } from "react"








function App(){

{/* STATES */}
  const[bill, setBill] = useState(0);
  const[tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);
  
  const Calculation = ()=>{
  const tipAmount=(Number(bill) * Number(tip))/100;
  const totallBill =(Number(bill) + tipAmount);
  const perPerson =(totallBill/Number(people))
 return { tipAmount, totallBill, perPerson };
  }

 


return(
  <div>
   {/* FIRST INPUT */}
    <input
     type="number"
     value={bill}
     onChange={(e)=>{
      setBill(e.target.value)
     }}
     />

     {/* SECOND INPUT */}
     <input
      type="number" 
      value={tip}
      onChange={(e)=>{
        setTip(e.target.value)
      }}
      />

      {/* THIRD INPUT */}
      <input
       type="number"
       value={people}
       onChange={(e)=>{
        setPeople(e.target.value)
       }}
       />
  </div>
)}
export default App;