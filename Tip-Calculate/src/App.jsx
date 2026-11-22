
import { useState } from "react";
import "./App.css"

function App() {
  // STATES
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");

  // CALCULATION
  const Calculation = () => {
    const tipAmount = (Number(bill) * Number(tip)) / 100;

    const totallBill = Number(bill) + tipAmount;

    if (people === "" || Number(people) <= 0) {
      return {
        tipAmount,
        totallBill,
        perPerson: 0,
      };
    }

    const perPerson = totallBill / Number(people);

    return { tipAmount, totallBill, perPerson };
  };

  // GET CALCULATION RESULTS
  const { tipAmount, totallBill, perPerson } = Calculation();

  return (
    <div>
      <h1>Tip Calculator</h1>
      {/* FIRST INPUT - BILL */}
       <label className="input-lable">Tip Percentage (%):</label>
      <input
        type="number"
        min="1"
        value={bill}
        placeholder="Enter bill amount"
        onChange={(e) => setBill(e.target.value)}
      />

      {/* SECOND INPUT - TIP */}
       <label input-lable>Tip Percentage (%):</label>
      <input
        type="number"
        min="1"
        value={tip}
        placeholder="Enter tip percentage (%)"
        onChange={(e) => setTip(e.target.value)}
      />

      {/* THIRD INPUT - PEOPLE */}
        <label input-lable>Number of People:</label>
      <input
        type="number"
        min="1"
        value={people}
        placeholder="Number of people"
        onChange={(e) => setPeople(e.target.value)}
      />

      {/* RESULTS */}
      <p>Tip Amount: {tipAmount}</p>
      <p>Total Bill: {totallBill}</p>
      <p>Per Person: {perPerson}</p>

      {/* BILL VALIDATION */}
{bill !== "" && Number(bill) <= 0 && (
  <p className="error-message">
    Please enter a valid bill amount!
  </p>
)}

{/* TIP VALIDATION */}
{tip !== "" && Number(tip) <= 0 && (
  <p className="error-message">
    Please enter a valid tip percentage!
  </p>
)}

{/* PEOPLE VALIDATION */}
{people !== "" && Number(people) <= 0 && (
  <p className="error-message">
    Number of people must be greater than zero!
  </p>
)}
      </div>
  );
}

export default App;
