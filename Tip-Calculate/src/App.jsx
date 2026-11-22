
import { useState } from "react";
import "./App.css"

function App() {
  // STATES
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(null);
  const [people, setPeople] = useState(null);

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
       <label>Tip Percentage (%)</label>
      <input
        type="number"
        value={bill}
        placeholder="Enter bill amount"
        onChange={(e) => setBill(e.target.value)}
      />

      {/* SECOND INPUT - TIP */}
       <label>Tip Percentage (%)</label>
      <input
        type="number"
        value={tip}
        placeholder="Enter tip percentage (%)"
        onChange={(e) => setTip(e.target.value)}
      />

      {/* THIRD INPUT - PEOPLE */}
        <label>Number of People</label>
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

      {/* ERROR MESSAGE */}
      {Number(people) <= 0 && people !== "" && (
        <p>Number of people must be greater than zero!</p>
      )}
    </div>
  );
}

export default App;
