
import { useState } from "react";
import "./App.css"

function App() {
  // STATES
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(10);
  const [people, setPeople] = useState(1);

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
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />

      {/* SECOND INPUT - TIP */}
      <input
        type="number"
        value={tip}
        onChange={(e) => setTip(e.target.value)}
      />

      {/* THIRD INPUT - PEOPLE */}
      <input
        type="number"
        min="1"
        value={people}
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
